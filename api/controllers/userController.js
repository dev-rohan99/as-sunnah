import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createError from "../utility/errorHandler.js";
import jwt from "jsonwebtoken";


/**
 * User register
 * @param {*} req 
 * @route /api/v1/user/register
 * @param {*} res 
 * @method POST
 */

export const register = async (req, res, next) => {

    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(err){

        next(createError(err));

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

    }catch(err){
        
    }

}

/**
 * logged in user
 * @param {*} req 
 * @route /api/v1/user/me
 * @param {*} res 
 * @method GET
 */

export const loggedInUser = async (req, res, next) => {

    try{

    }catch(err){

    }

}


// /**
//  * Single user data get
//  * @param {*} req 
//  * @param {*} res 
//  */

// export const getSingleUserData = async (req, res, next) => {

//     let {id} = req.params;

//     try{
//         const user = await userModel.findById(id);
//         res.status(200).json(user);
//     }catch(err){
        
//         next(createError(err));

//     }

// }

// /**
//  * Create user data
//  * @param {*} req 
//  * @param {*} res 
//  */

// export const createUserData = async (req, res, next) => {

//     // make password encrypt
//     const salt = await bcrypt.genSalt(10);
//     const encryptPassword = await bcrypt.hash(req.body.Password, salt);

//     try{

//         const createUser = await userModel.create({
//             ...req.body,
//             Password : encryptPassword
//         });
//         res.status(200).json(createUser);

//     }catch(err){

//         next(createError(err));

//     }

// }

// /**
//  * Update user data
//  * @param {*} req 
//  * @param {*} res 
//  */

// export const updateUserData = async (req, res, next) => {

//     let {id} = req.params;

//     try{
//         const updateUser = await userModel.findByIdAndUpdate(id, req.body);
//         res.status(200).json(updateUser);
//     }catch(err){
       
//         next(createError(err));

//     }

// }

// /**
//  * Delete user data
//  * @param {*} req 
//  * @param {*} res 
//  */

// export const deleteUserData = async (req, res, next) => {

//     let {id} = req.params;

//     try{
//         const deleteUser = await userModel.findByIdAndRemove(id);
//         res.status(200).json(deleteUser);
//     }catch(err){
        
//         next(createError(err));

//     }

// }


// /**
//  * Login user
//  * @param {*} req 
//  * @param {*} res 
//  */

//  export const loginUser = async (req, res, next) => {

//     const { Username, Email, Password } = req.body;

//     try{

//         const loginUser = await userModel.findOne({ Username : req.body.Username });

//         if( !loginUser ){
//             next(createError('404', 'User not found!'));
//         }else{

//             const checkPassword = await bcrypt.compare(req.body.Password, loginUser.Password);

//             if( !checkPassword ){
//                 next(createError('404', 'Wrong password! Try again.'));
//             }else{

//                 const token = jwt.sign({ id : loginUser._id, Role : loginUser.Role }, process.env.JWT_SECRECT);

//                 res.cookie('TokenAccess', token).status(200).json({
//                     Status : true,
//                     User : loginUser,
//                     Token : token
//                 });
                
//             }

//         }

//     }catch(err){

//         next(createError(err));

//     }

// }

