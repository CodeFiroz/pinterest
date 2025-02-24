import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { uploadPost } from '../controllers/post.controller.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

router.post('/publish', upload.single("file"), uploadPost);


export default router;