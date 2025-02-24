import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { getPost, uploadPost } from '../controllers/post.controller.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

router.post('/publish', authMiddleware, upload.single("file"), uploadPost);
router.post('/post',getPost);


export default router;