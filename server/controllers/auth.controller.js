import User from "../models/user.model.js";
import { genrateAndSaveToken } from "../utils/genrateAndSaveToken.js";
import bcrypt from "bcrypt";


export const register = async (req, res)=>{
    try{

        const {name, email, password} = req.body;        

        if(!name || !email || !password){
            return res.status(400).json({success: false, message: "All fields are required"});
            
        }
        
        const user = await User.findOne({email});
        
        if(user){
            return res.status(400).json({success: false, message: "User already exists"});
        }

        const userpic = `https://avatar.iran.liara.run/username?username=${name}`
        const hashPassword = await bcrypt.hash(password, 10);

        const newuser = new User({
            name,
            email,
            password: hashPassword,
            pic: userpic
        });

        await newuser.save();

        genrateAndSaveToken(newuser._id, res);

        const registeredUser = {
            id: newuser._id,
            name: newuser.name,
            email: newuser.email,
            pic: newuser.pic
        }

        return res.status(201).json({success: true, message: "User registered successfully", user: registeredUser});

    }catch(err){
        console.log("Error on register", err);        
        return res.status(500).json({success: false, message: "Internal server error", err});
    }
}

export const signin = async (req, res)=>{
    try{

        const {email, password} = req.body; 

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({success: false, message: "Invalid credentials"});
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword){
            return res.status(400).json({success: false, message: "Invalid credentials [Password]"});
        }

        genrateAndSaveToken(user._id, res);

        const loggedinUser = {
            id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic
        }


        return res.status(200).json({success: true, message: "User logged in successfully", user: loggedinUser});

        
    }catch(err){
        console.log("Error on signin", err);
        return res.status(500).json({success: false, message: "Internal server error", err});
        
    }
}

export const checkAuth = async(req, res)=>{
    try{

        return res.status(200).json(req.user);

    }catch(err){
        console.log(`Error on checkAuth`, err);
        return res.status(500).json({success: false, message: "Internal server error", err});
        
    }
}