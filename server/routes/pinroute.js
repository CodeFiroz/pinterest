import express from 'express';
import { newPin, getPins } from '../controllers/pincontroller.js';
import { protectRoute } from '../middlewares/authmiddleware.js';
import { upload, PinUpload } from '../config/Cloudinary.js';

const router = express.Router();

router.post('/create', protectRoute, PinUpload.single("pin"), newPin);

router.get('/pins', getPins);

export default router;