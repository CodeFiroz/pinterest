import express from 'express';
import { checkAuth, register, signin } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', register);
router.post('/signin', signin);
router.post('/verify', authMiddleware, checkAuth);


export default router;