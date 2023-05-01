import express from 'express';
import { loggedInUser, login, register, accountActivation, accountActivateByCode, forgotPassword, passwordResetAction, findUserAccount, resendAccountActivation, sendUserIdentificationOTP, checkPasswordResetOTP, passwordReset, userUpdateProfile, userFeaturedUpdate, userProfilePhotoUpdate, getAllUser, friendRequstSender, confirmFriendRequst, cancelFriendRequst } from '../controllers/userController.js';
import multer, { diskStorage } from 'multer';
import path from "path";
const router = express.Router();

const __dirname = path.resolve();

const storage = diskStorage({
    destination : (req, file, cb) => {
        if(file.fieldname === "featuredImage"){
            cb(null, path.join(__dirname, "/api/public/featured-image"));
        }else if(file.fieldname === "profilePhoto"){
            cb(null, path.join(__dirname, "/api/public/profile-photo"));
        }
    },

    filename : (req, file, cb) => {
        cb(null, ((Date.now() / 1000) / 60) + "-" + file.originalname);
    }
});


const uploadFeaturedSlider = multer({ storage : storage }).array('featuredImage', 15);
const uploadProfilePhoto = multer({ storage : storage }).single('profilePhoto');


// user register
router.post('/register', register);
// user login
router.post('/login', login);
// user loggedin
router.get('/me', loggedInUser);
// get all user data
router.get('/users/:id', getAllUser);
// add friend request router
router.get('/add-friend/:requester/:receiver', friendRequstSender);
// cancel friend request router
router.get('/cancel-friend-request/:requester/:receiver', cancelFriendRequst);
// confirm friend reques request router
router.get('/confirm-friend-request/:receiver/:requester', confirmFriendRequst);
// user update profile
router.put('/profile-update/:id', userUpdateProfile);
// user account activation by email
router.get('/activate/:token', accountActivation);
// user account activation by code
router.post('/code-activate', accountActivateByCode);
// user account activation resend
router.post('/resend-activation', resendAccountActivation);
// user account activation resend
router.post('/send-user-identification-otp', sendUserIdentificationOTP);
// find user account
router.post('/find-user-account', findUserAccount);
// check password reset otp
router.post('/check-password-reset-otp', checkPasswordResetOTP);
// check password reset otp
router.post('/password-reset', passwordReset);
// user forgot password
router.post('/forgot-password', forgotPassword);
// user password reset action
router.post('/forgot-password/:token', passwordResetAction);
// user featured update
router.put('/featured/:id', uploadFeaturedSlider, userFeaturedUpdate);
// user profile photo update
router.put('/profile-photo/:id', uploadProfilePhoto, userProfilePhotoUpdate);




// router export
export default router;
