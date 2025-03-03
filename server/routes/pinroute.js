import express from 'express';
import { newPin, getPins, pinGet } from '../controllers/pincontroller.js';
import { protectRoute } from '../middlewares/authmiddleware.js';
import { upload, PinUpload } from '../config/Cloudinary.js';

const router = express.Router();

router.post('/create', protectRoute, PinUpload.single("pin"), newPin);

router.post('/pins', protectRoute,  getPins);
router.post('/:pinId', protectRoute, pinGet);

export default router;