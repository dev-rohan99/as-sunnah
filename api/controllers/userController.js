import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createError from "../utility/createError.js";
import { isEmail, isPhone } from "../utility/validate.js";
import { genHashPassword, verifyPassword } from "../utility/hash.js";
import { createToken, verifyToken } from "../utility/token.js";
import { resetPasswordLink, sendActivationLink } from "../utility/sendMail.js";
import { getRandomCode } from "../utility/math.js";
import { sendSms } from "../utility/sendSms.js";


/**
 * User register
 * @param {*} req 
 * @route /api/v1/user/register
 * @param {*} res 
 * @method POST
 */

export const register = async (req, res, next) => {
    
    try{

        // get form data
        const { firstName, surName, phoneOrEmail, username, password, birthDate, birthMonth, gender } = req.body;

        // validation
        if( !firstName || !surName || !password || !birthDate || !birthMonth || !gender ){
            next(createError(400, 'All fields are required!'));
        }

        let emailData = null;
        let phoneData = null;

        if( isEmail(phoneOrEmail) ){

            const userEmail = await userModel.findOne({email : phoneOrEmail});
            if( userEmail ){
                return next(createError(400, 'This email already exists!'));
            }else{
                emailData = phoneOrEmail;
            }
            
        }else if( isPhone(phoneOrEmail) ){

            const userPhone = await userModel.findOne({phone : phoneOrEmail});
            if( userPhone ){
                return next(createError(400, 'This phone number already exists!'));
            }else{
                phoneData = phoneOrEmail;
            }
            
        }else{
            return next(createError(400, 'Invalid email or phone address!'));
        }

        // create access token
        let activationCode = getRandomCode(100000, 999999);

        // check activation code
        const checkActivationCode = await userModel.findOne({accessToken : activationCode});

        if( checkActivationCode ){
            activationCode = getRandomCode(100000, 999999);
        }

        // create user
        const user = await userModel.create({
            ...req.body,
            email : emailData,
            phone : phoneData,
            password : genHashPassword(password),
            accessToken : activationCode
        });

        if (!user) {
            next(createError(404, 'User not created!'));
        }

        if(user){

            const activationToken  = createToken({id : user._id}, '30d');

            sendActivationLink(user.email, {
                name : user.firstName + ' ' + user.surName,
                link : `${process.env.APP_URI + ':' + process.env.SERVER_PORT}/api/v1/user/activate/${activationToken}`,
                code : activationCode
            });
            
            res.status(200).cookie('otp', user.email, {
                expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
            }).json({
                message : "User created successfull!",
                user : user
            });

        }


    }catch(err){
        next(err);
    }

}

/**
 * User login
 * @param {*} req 
 * @route /api/v1/user/login
 * @param {*} res
 * @method POST
 */

export const login = async (req, res, next) => {

    try{

        const {email, password} = req.body;

        if(!email || !password){
            next(createError(400, 'All fields are required!'));
        }

        if(!isEmail){
            next(400, 'Invalid email address!');
        }

        const loginUser = await userModel.findOne({email : email});
        
        if(!loginUser){
            next(createError(400, 'Login user not found!'));
        }else{

            if(!verifyPassword(password, loginUser.password)){
                next(400, 'Password not matched!')
            }else{

                const token = createToken({id : loginUser._id}, '365d');
                
                res.status(200).cookie('authToken', token).json({
                    message : "User login successfull!",
                    user : loginUser,
                    token : token
                });

            }

        }

    }catch(err){
        next(err);
    }

}

/**
 * loggedin user
 * @param {*} req 
 * @route /api/v1/user/me
 * @param {*} res 
 * @method GET
 */

export const loggedInUser = async (req, res, next) => {

    try{

        const authToken = req.headers.authorization;

        if(!authToken){
            next(createError(400, "Token not found!"));
        }

        if(authToken){
            const token = authToken.split(' ')[1]
            const user = verifyToken(token);

            if(!user){
                next(createError(400, "Invalid token!"));
            }

            if(user){
                const looggedinUser = await userModel.findById(user.id);

                if(!loggedInUser){
                    next(createError(400, "User not match!"));
                }else{
                    res.status(200).json({
                        message : "User data stable!",
                        user : looggedinUser
                    });
                }
            }
        }

    }catch(err){
        next(err);
    }

}

/**
 * account activate by sending email
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const accountActivation = async (req, res, next) => {
    
    try{

        // get token
        const { token } = req.params;

        if(!token){
            next(createError(400, 'Invalid activation url!'))
        }else{

            // token verify
            const tokenData = verifyToken(token);

            // check token
            if(!tokenData){
                next(createError(400, 'Invalid token!'));
            }

            if(tokenData){

                const userAccount = await userModel.findById(tokenData.id);

                if(userAccount.isActivate){
                    next(createError(400, 'Account already activate!'))
                }else{
                    await userModel.findByIdAndUpdate(tokenData.id, {
                        isActivate : true,
                        accessToken : ""
                    });

                    res.status(200).json({
                        message : "Account activated successfull!"
                    })
                }
                
            }

        }

    }catch(err){
        next(err);
    }

}

/**
 * account activate by code
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const accountActivateByCode = async (req, res, next) => {

    try{

        const { code } = req.body;
        // const user = await userModel.findOne({accessToken : code, isActivate : false});
        const user = await userModel.findOne().and([{accessToken : code}, {isActivate : false}]);

        if(!user){
            next(createError(400, 'Activation user not found!'));
        }else{

            if(user.isActivate == true){
                next(createError(400, 'Account already activated!'));
            }else{

                if(user.accessToken !== code){
                    next(createError(400, 'OTP code not matched!'));
                }else{
                    await userModel.findByIdAndUpdate(user.id, {
                        isActivate : true,
                        accessToken : ""
                    });
        
                    res.status(200).json({
                        message : "Account acctivated successfull!"
                    });
                }

            }

        }

    }catch(err){
        next(err);
    }

}

/**
 * find user account
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const findUserAccount = async (req, res, next) => {

    try{

        const { phoneOrEmail } = req.body;

        let emailData = null;
        let phoneData = null;

        if(isEmail(phoneOrEmail)){

            const emailUser = await userModel.findOne({email : phoneOrEmail})
            if(!emailUser){
                return next(createError(400, "Email user not found!"));
            }else{

                return res.status(200).cookie(
                    'findUser', 
                    JSON.stringify({
                        name : emailUser.firstName + ' ' + emailUser.surName,
                        email : emailUser.email,
                        avatar : emailUser.avatar
                    }), 
                    {expires : new Date(Date.now() + 1000 * 60 * 60 * 72)}
                ).json({
                    user : emailUser
                });

            }

        }else if(isPhone(phoneOrEmail)){

            const phoneUser = await userModel.findOne({phone : phoneOrEmail})
            if(!phoneUser){
                return next(createError(400, "Phone user not found!"));
            }else{

                return res.status(200).cookie(
                    'findUser', 
                    JSON.stringify({
                        name : phoneUser.firstName + ' ' + phoneUser.surName,
                        phone : phoneUser.phone,
                        avatar : phoneUser.avatar
                    }), 
                    {expires : new Date(Date.now() + 1000 * 60 * 60 * 72)}
                ).json({
                    user : phoneUser
                });

            }

        }else{
            return next(createError(400, "User not found!"));
        }

    }catch(err){
        next(err);
    }

}

/**
 * forgot password
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const forgotPassword = async (req, res, next) => {

    try{

        const { email } = req.body;
        const user = await userModel.findOne({email : email});

        if(!email){
            next(createError(400, "User not found!"));
        }

        if(email){

            const passwordResetToken  = createToken({id : user._id}, '30m');

            // create access token
            let activationCode = getRandomCode(100000, 999999);

            // check activation code
            const checkActivationCode = await userModel.findOne({accessToken : activationCode});

            if( checkActivationCode ){
                activationCode = getRandomCode(100000, 999999);
            }

            resetPasswordLink(user.email, {
                name : user.firstName + ' ' + user.surName,
                link : `${process.env.APP_URI + ':' + process.env.SERVER_PORT}/api/v1/user/forgot-password/${passwordResetToken}`,
                code : activationCode
            });
            
            res.status(200).json({
                message : "Password reset link has sent to your email account!"
            });

        }

    }catch(err){
        next(err);
    }

}

/**
 * password reset by code
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const passwordResetAction = async (req, res, next) => {

    try{

        // get token
        const { token } = req.params;
        const { password } = req.body;

        if(!token){
            next(createError(400, 'Invalid activation url!'))
        }else{

            // token verify
            const tokenData = verifyToken(token);

            // check token
            if(!tokenData){
                next(createError(400, 'Invalid token!'));
            }

            if(tokenData){

                const userAccount = await userModel.findById(tokenData.id);

                if( !userAccount ){
                    next(createError(400, "Invalid user!"))
                }

                if( userAccount ){
                    await userModel.findByIdAndUpdate(userAccount._id, {
                        password : genHashPassword(password),
                        accessToken : ""
                    });

                    res.status(200).json({
                        message : "Password reset successfull!"
                    });
                }
                
            }

        }

    }catch(err){
        next(err);
    }

}

/**
 * resend accound activation link
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const resendAccountActivation = async (req, res, next) => {

    try{

        const { emailOrPhone } = req.body;

        if(isEmail(emailOrPhone)){

            const userEmail = await userModel.findOne({email : emailOrPhone});
            console.log(userEmail);

            if(!userEmail){
                next(createError(400, "User not found!"));
            }

            if(userEmail.isActivate){
                next(createError(400, "Account already activated!"))
            }
    
            // create access token
            let activationCode = getRandomCode(100000, 999999);
    
            // check activation code
            const checkActivationCode = await userModel.findOne({accessToken : activationCode});
    
            if( checkActivationCode ){
                activationCode = getRandomCode(100000, 999999);
            }
    
            if(userEmail){
    
                const activationToken  = createToken({id : userEmail._id}, '30d');
        
                sendActivationLink(userEmail.email, {
                    name : userEmail.firstName + ' ' + userEmail.surName,
                    link : `${process.env.APP_URI + ':' + process.env.SERVER_PORT}/api/v1/user/activate/${activationToken}`,
                    code : activationCode
                });
    
                await userModel.findByIdAndUpdate(userEmail._id, {
                    accessToken : activationCode
                });
                
                res.status(200).cookie('otp', userEmail.email, {
                    expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                }).json({
                    message : "User activation link send to your account! Check your email."
                });
    
            }

        }else if(isPhone(emailOrPhone)){

            const userPhone = await userModel.findOne({phone : emailOrPhone});

            if(!userPhone){
                next(createError(400, "User not found!"))
            }

            if(userPhone.isActivate){
                next(createError(400, "Account already activated!"))
            }
    
            // create access token
            let activationCode = getRandomCode(100000, 999999);
    
            // check activation code
            const checkActivationCode = await userModel.findOne({accessToken : activationCode});
    
            if( checkActivationCode ){
                activationCode = getRandomCode(100000, 999999);
            }
    
            if(userPhone){
        
                sendSms(userPhone.phone, `Your OTP code is ${activationCode}`);
    
                await userModel.findByIdAndUpdate(userPhone._id, {
                    accessToken : activationCode
                });
                
                res.status(200).cookie('otp', userPhone.phone, {
                    expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                }).json({
                    message : "User activation OTP send to your phone number! Check your message!"
                });
    
            }

        }else{
            next(createError(400, "Invalid phone or email address!"));
        }

    }catch(err){
        next(err);
    }

}

/**
 * send user identification otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const sendUserIdentificationOTP = async (req, res, next) => {

    try{

        const { emailOrPhone } = req.body;

        if(isEmail(emailOrPhone)){

            const userEmail = await userModel.findOne({email : emailOrPhone});

            if(!userEmail){
                return next(createError(400, "User not found!"));
            }
    
            // create access token
            let activationCode = getRandomCode(100000, 999999);
    
            // check activation code
            const checkActivationCode = await userModel.findOne({accessToken : activationCode});
    
            if( checkActivationCode ){
                activationCode = getRandomCode(100000, 999999);
            }
    
            if(userEmail){
    
                const activationToken  = createToken({id : userEmail._id}, '30d');
        
                sendActivationLink(userEmail.email, {
                    name : userEmail.firstName + ' ' + userEmail.surName,
                    link : `${process.env.APP_URI + ':' + process.env.SERVER_PORT}/api/v1/user/activate/${activationToken}`,
                    code : activationCode
                });
    
                await userModel.findByIdAndUpdate(userEmail._id, {
                    accessToken : activationCode
                });
                
                return res.status(200).cookie('otp', userEmail.email, {
                    expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                }).json({
                    message : "User forgot password link send to your account! Check your email."
                });
    
            }

        }else if(isPhone(emailOrPhone)){

            const userPhone = await userModel.findOne({phone : emailOrPhone});

            if(!userPhone){
                return next(createError(400, "Invalid phone No.!"))
            }
    
            // create access token
            let activationCode = getRandomCode(100000, 999999);
    
            // check activation code
            const checkActivationCode = await userModel.findOne({accessToken : activationCode});
    
            if( checkActivationCode ){
                activationCode = getRandomCode(100000, 999999);
            }
    
            if(userPhone){
        
                sendSms(userPhone.phone, `Your OTP code is ${activationCode}`);
    
                await userModel.findByIdAndUpdate(userPhone._id, {
                    accessToken : activationCode
                });
                
                return res.status(200).cookie('otp', userPhone.phone, {
                    expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                }).json({
                    message : "User forgot password OTP send to your phone number! Check your message!"
                });
    
            }

        }else{
            return next(createError(400, "Invalid phone or email address!"));
        }

    }catch(err){
        return next(err);
    }

}

/**
 * check password reset OTP
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const checkPasswordResetOTP = async (req, res, next) => {

    try{

        const { phoneOrEmail, code } = req.body;

        if(isEmail(phoneOrEmail)){

            const emailUser = await userModel.findOne().where("email").equals(phoneOrEmail);
            
            if(!emailUser){
                return next(createError(400, "Invalid email address!"));
            }

            if(emailUser){

                if(emailUser.accessToken != code){
                    return next(createError(400, "Invalid OTP code!"));
                }

                if(emailUser.accessToken == code){
                    return res.status(200).cookie('changePassID', emailUser._id.toString(), {
                        expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                    }).cookie('changePassCode', code, {
                        expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                    }).json({
                        message : "You can change your password!"
                    });
                }

            }

        }else if(isPhone(phoneOrEmail)){

            const phoneUser = await userModel.findOne().where("phone").equals(phoneOrEmail);
            
            if(!phoneUser){
                return next(createError(400, "Invalid phone number!"));
            }

            if(phoneUser){

                if(phoneUser.accessToken != code){
                    return next(createError(400, "Invalid OTP code!"));
                }

                if(phoneUser.accessToken == code){
                    return res.status(200).cookie('changePass', phoneUser._id.toString(), {
                        expires : new Date(Date.now() + 1000 * 60 * 60 * 72)
                    }).json({
                        message : "You can change your password!"
                    });
                }

            }

        }else{
            return next(createError(400, "Invalid phone number or email address!"));
        }

    }catch(err){
        next(err);
    }

}


export const passwordReset = async (req, res, next) => {

    try{

        const {id, password, code} = req.body;

        const userData = await userModel.findOne().and([
            {_id : id}, 
            {accessToken : code}
        ]);

        if(!userData){
            next(400, "Password change request failed!");
        }

        if(userData){

            await userModel.findByIdAndUpdate(userData._id, {
                password : genHashPassword(password),
                accessToken : ""
            });

            return res.status(200).clearCookie("changePassID").clearCookie("changePassCode").clearCookie("otp").clearCookie("findUser").json({
                message : "Password changed successfull!"
            });

        }

    }catch(err){
        next(err);
    }

}
