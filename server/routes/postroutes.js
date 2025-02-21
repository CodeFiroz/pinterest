import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { uploadPost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/publish', authMiddleware, uploadPost);


export default router;