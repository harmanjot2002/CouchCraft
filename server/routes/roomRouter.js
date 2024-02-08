// roomRouter.js
import { Router } from 'express';
import { createRoom } from '../controllers/room.js';
import authenticateJWT from '../middleware/auth.js';

const roomRouter = Router();

// Apply the auth middleware to authenticate the user before reaching the createRoom controller
roomRouter.post('/', authenticateJWT, createRoom);

export default roomRouter;
