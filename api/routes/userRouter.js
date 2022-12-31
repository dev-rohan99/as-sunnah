import express from 'express';
import { loggedInUser, login, register, accountActivation, accountActivateByCode, forgotPassword, passwordResetAction } from '../controllers/userController.js';
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
// user forgot password
router.post('/forgot-password', forgotPassword);
// user password reset action
router.post('/forgot-password/:token', passwordResetAction);




// router export
export default router;
