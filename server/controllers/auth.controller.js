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

        return res.status(201).json({success: true, message: "User registered successfully"});

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

        return res.status(200).json({success: true, message: "User logged in successfully"});

        
    }catch(err){
        console.log("Error on signin", err);
        return res.status(500).json({success: false, message: "Internal server error", err});
        
    }
}