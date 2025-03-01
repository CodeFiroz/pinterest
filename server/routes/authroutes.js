import express from "express"

import { forgotPassword, logout, resetPassword, signIn, signUp, verifyAuth } from "../controllers/authcontroller.js";
import { protectRoute } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password", resetPassword)
router.post("/logout", logout)
router.post("/verify", protectRoute,  verifyAuth)

export default router;