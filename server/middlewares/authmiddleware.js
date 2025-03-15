import jwt from "jsonwebtoken"

import User from "../models/usermodel.js"

export const protectRoute = async (req, res, next)=>{

    try{

        const token = req.cookies.authToken;

        
        
        if(!token){
            return res.status(401).json({success: false, message: "Unauthoried - invalid token."});
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ success: false, message: "Unauthorized - Invalid or expired token." });
        }

        const userId = decoded.userid;

        const user = await User.findOne({_id : userId}).select("-password -resetToken -resetTokenExpiry -updatedAt  -createdAt");
        
        if(!user){
            return res.status(401).json({success: false, message: "User not found - Invalid token"});
        }
        
        
        
        req.user = {user};

        next();

    }catch(err){
        console.log(`❌ protectRoute middleware error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }

}