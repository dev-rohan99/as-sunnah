import createError from "../controllers/errorController.js";
import jwt from "jsonwebtoken";


export const adminAuthMiddleware = (req, res, next) => {

    try{
        const token = req.cookies.TokenAccess;

        // Token check
        if( !token ){
            next(createError(401, 'Sorry! You are not authorized!'));
        }else{

            const loginUser = jwt.verify(token, process.env.JWT_SECRECT);

            if( !loginUser ){
                next(createError(401, 'Invalid token!'));
            }else if( loginUser._id !== req.params.id ){
                next(createError(401, 'You are not be able to access this feture!'));
            }else if( loginUser.Role !== "admin" ){
                next(createError(401, 'Only admin can access this features!'));
            }else{
                req.user = loginUser;
                next();
            }

        }
    }catch(err){
        next(createError(err));
    }

}


