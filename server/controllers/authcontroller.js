import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from '../models/usermodel.js'
import { genrateTokenAndSave } from '../utils/genrateSigninToken.js';
import { sendResetMail } from '../utils/sendResetEmail.js';

export const signUp = async (req, res)=>{
    try{

        const {name, username, email, password} = req.body;

        if(!name || !username || !email || !password){
            return res.status(400).json({success: false, message: "Invalid data recieved"});
        }

        const checkUsername = await User.findOne({username});

        if(checkUsername){
            return res.status(400).json({success: false, message: `${username} is already taken. Try diffrent username`});
        }

        const checkEmail = await User.findOne({email});

        if(checkEmail){
            return res.status(400).json({success: false, message: `${email} is already registred with an account.`});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newuser = new User({
            name,
            username,
            email,
            password: hashPassword
        });

        if(newuser){
            genrateTokenAndSave(res, newuser._id);
        }

        res.status(201).json({
            success: true, 
            message: `account created.`
        })


    }catch(err){
        console.log(`❌ signUp controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const signIn = async (req, res)=>{
    try{

        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({success: false, message: "Invalid data recieved"});
        }

        const checkUser = await User.findOne({
            $or : [{username}, {email}]
        });

        if(!checkUser){
            return res.status(400).json({success: false, message: `${username} is not registred`});
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password);

        if(!checkPassword){
            return res.status(400).json({success: false, message: `incorrect password.`});
        }

        genrateTokenAndSave(res, checkUser._id);

        res.status(201).json({
            success: true, 
            message: `user logged in.`
        })


    }catch(err){
        console.log(`❌ sighIn controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const forgotPassword = async (req, res)=>{
    try{

        const {username} = req.body;

        if(!username){
            return res.status(400).json({success: false, message: "Invalid data recieved"});
        }

        const checkUser = await User.findOne({
            $or : [{username}, {email}]
        });

        if(!checkUser){
            return res.status(400).json({success: false, message: `${username} is not registred`});
        }

        const resetToken = jwt.sign({
                userid : checkUser._id
              }, process.env.JWT_SECRET , { expiresIn: '15m' });
        

        const hashToken = await bcrypt.hash(resetToken, 10)

        checkUser.resetToken = hashToken;
        checkUser.resetTokenExpiry = Date.now()  + 15 * 60 * 1000;

        await checkUser.save();

        sendResetMail(resetToken, checkUser.email)
       
        res.json({ message: "Password reset link sent to your email." });
       


    }catch(err){
        console.log(`❌ forgotPassword controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const resetPassword = async (req, res)=>{
    try{
        
        const { token } = req.params;
        const { password } = req.body;

        if(!password){
            return res.status(400).json({success: false, message: "please create a password"});
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decode.userid);

        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired token"});
        }

        if(user.resetTokenExpiry < Date.now()){
            return res.status(400).json({success: false, message: "Token has expiry."});
        }

        const isValidToken = await bcrypt.compare(token, user.resetToken);
        if (!isValidToken) {
            return res.status(400).json({ success: false, message: "Invalid token" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        user.password = hashPassword;
        user.resetToken = null;
        user.resetTokenExpiry = null;

        await user.save();

        return res.status(200).json({success: true, message: "Password reset."});
       

    }catch(err){
        console.log(`❌ resetPassword controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const verifyAuth = (req, res)=>{
    try{
        
        const { user } = req.user;

        res.status(200).json({user});

    }catch(err){
        console.log(`❌ verifyAuth controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

