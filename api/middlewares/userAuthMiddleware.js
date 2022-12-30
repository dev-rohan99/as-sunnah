import createError from "../utility/createError.js";
import jwt from "jsonwebtoken";


export const userAuthMiddleware = (req, res, next) => {

    try{
        const token = req.cookies.TokenAccess;

        // Token check
        if( !token ){
            next(createError(404, 'Sorry! You are not authorized!'));
        }else{

            const loginUser = jwt.verify(token, process.env.JWT_SECRECT);

            if( !loginUser ){
                next(createError(404, 'Invalid token!'));
            }else if( loginUser._id !== req.params.id ){
                next(createError(404, 'You are not be able to access this feture!'));
            }else{
                req.user = loginUser;
                next();
            }

        }
    }catch(err){
        next(createError(err));
    }

}


