import express from 'express';
import { newPin, getPins, pinGet, pinToTrash, LikePin, getMyPins, SavePin } from '../controllers/pincontroller.js';
import { protectRoute } from '../middlewares/authmiddleware.js';
import { PinUpload } from '../config/Cloudinary.js';

const router = express.Router();

router.post('/create', protectRoute, PinUpload.single("pin"), newPin);

router.post('/my-pins', protectRoute,  getMyPins);
router.post('/pins', protectRoute,  getPins);
router.delete('/trash', protectRoute, pinToTrash);
router.post('/:pinId', protectRoute, pinGet);
router.put('/like/:pinId', protectRoute, LikePin);
router.put('/save/:pinId', protectRoute, SavePin);

export default router;