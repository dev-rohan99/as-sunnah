import express from 'express';
import { loggedInUser, login, register } from '../controllers/userController.js';
import { userAuthMiddleware } from '../middlewares/userAuthMiddleware.js';
const router = express.Router();


// user register
router.post('/register', register);
// user login
router.post('/login', login);
// user login
router.get('/me', loggedInUser);




// router export
export default router;
