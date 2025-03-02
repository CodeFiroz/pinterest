import express from "express"

import { forgotPassword, logout, resetPassword, signIn, signUp, updateProfile, verifyAuth } from "../controllers/authcontroller.js";
import { protectRoute } from "../middlewares/authmiddleware.js";
import { upload } from "../config/Cloudinary.js";

const router = express.Router();

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)
router.post("/update", protectRoute, upload.fields([{ name: "pfp" }, { name: "cover" }]), updateProfile)
router.get("/logout", logout)
router.get("/verify", protectRoute,  verifyAuth)

export default router;