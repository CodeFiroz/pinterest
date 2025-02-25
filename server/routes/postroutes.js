import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { getMyPost, getPost, getSinglePost, uploadPost } from '../controllers/post.controller.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

router.post('/publish', authMiddleware, upload.single("file"), uploadPost);
router.post('/post', getPost);
router.post('/myposts', getMyPost);
router.post('/getpost/:id', getSinglePost);


export default router;