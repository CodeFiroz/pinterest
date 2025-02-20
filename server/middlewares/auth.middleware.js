import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {

    try{

        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({success: false, message: "Invalid token"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({success: false, message: "Invalid token"});
        }

        const user = await User.findById(decoded.userid);

        if(!user){
            return res.status(401).json({success: false, message: "Invalid User"});
        }

        req.user = user;

        next();

    }catch(err){
        console.log(`Error on authMiddleware`, err);
        return res.status(500).json({success: false, message: "Internal server error", err});
    }

}