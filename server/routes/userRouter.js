import express from 'express';
import { login, register,updateProfile } from '../controllers/user.js';
import authenticateJWT from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.patch('/updateProfile',authenticateJWT,  updateProfile);

export default userRouter;