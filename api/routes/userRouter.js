import express from 'express';
import { loggedInUser, login, register, accountActivation, accountActivateByCode, forgotPassword, passwordResetAction, findUserAccount, resendAccountActivation, sendUserIdentificationOTP, checkPasswordResetOTP, passwordReset } from '../controllers/userController.js';
import { userAuthMiddleware } from '../middlewares/userAuthMiddleware.js';
const router = express.Router();


// user register
router.post('/register', register);
// user login
router.post('/login', login);
// user loggedin
router.get('/me', loggedInUser);
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




// router export
export default router;
