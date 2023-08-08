import express from 'express';
import {
  registerController,
  loginController,
  testController,
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

//router object
const router = express.Router();

//routing
//register Method Post
router.post('/register', registerController);

// login || method post
router.post('/login', loginController);

//Test Route Protected
router.get('/test', requireSignIn, isAdmin, testController);

export default router;
