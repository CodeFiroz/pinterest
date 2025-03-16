import Pin from "../models/pinmodel.js";
import mongoose from "mongoose";

export const getPins = async (req, res)=>{
    try{

        const pins = await Pin.find().select("_id image title");

        if(!pins){
            return res.status(400).json({success: false, message: "Failed to fetch pin"});
        }

        return res.status(201).json({success: true, message: "Pin fetch successfully", pins: pins});

    }catch(err){
        console.log(`❌ newPin controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const getMyPins = async (req, res)=>{
    try{

        const { username } = req.body;
        

        const pins = await Pin.find({
            creator: username
        }).select("_id image title");

        

        if(!pins){
            return res.status(400).json({success: false, message: "Failed to fetch pin"});
        }

        return res.status(200).json({success: true, message: "Pin fetch successfully", pins: pins});

    }catch(err){
        console.log(`❌ getMyPins controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}


export const MySavedPin = async (req, res)=>{
    try{

        const { user } = req.user;

        const pins = await Pin.find({
            saved: user._id
        }).select("_id image title");

        if(!pins){
            return res.status(400).json({success: false, message: "Failed to fetch pin"});
        }

        return res.status(201).json({success: true, message: "Pin fetch successfully", pins: pins});

    }catch(err){
        console.log(`❌ getMyPins controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}


export const newPin = async (req, res) => {
    try {
       
        const { title, description } = req.body;
        const { user } = req.user;


        // Ensure title is provided
        if (!title) {
            return res.status(400).json({ success: false, message: "Please add a title" });
        }

        
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Please upload an image" });
        }

        
        const pin = req.file.path;        
        
        const newPin = new Pin({
            title,
            description,
            image: pin, 
            creator: user._id
        });

        
        const savedPin = await newPin.save();

        if (!savedPin) {
            return res.status(400).json({ success: false, message: "Failed to save pin" });
        }

        return res.status(201).json({ success: true, message: "Pin saved successfully", pin: savedPin._id });

    } catch (err) {
        console.error(`❌ newPin controller error :: ${err.message}`);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const pinGet = async (req, res) => {
    try{

        const { pinId } = req.params;        
        
        if(!pinId){
            console.log(pinId);
            return res.status(400).json({success: false, message: "Invaild post id "});
        }

        

        const pin = await Pin.findById(pinId).populate("creator",  "_id name pfp username");

        if(!pin){
            return res.status(400).json({success: false, message: "Can't find pin "});
        }

        return res.status(200).json({success: true, message: "Pin fetch successfully", pin});

    }catch (err) {
        console.error(`❌ pinGet controller error :: ${err.message}`);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const pinToTrash = async (req, res) => {
    try {
        const { pinId } = req.body;
        console.log(pinId);

        // Validate pinId
        if (!pinId) {
            return res.status(400).json({ success: false, message: "Invalid Pin ID" });
        }

        


        // Check if pin exists
        const pin = await Pin.findById(pinId);
        if (!pin) {
            return res.status(404).json({ success: false, message: "Pin Not Found" });
        }

        // Delete the pin
        const deletedPin = await Pin.findByIdAndDelete(pinId);
        if (!deletedPin) {
            return res.status(400).json({ success: false, message: "Failed to delete Pin" });
        }

        return res.status(200).json({ success: true, message: "Pin deleted successfully" });
    } catch (err) {
        console.error(`❌ deletePin controller error :: ${err.message}`);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const LikePin = async (req, res) => {
    try {
        const { pinId } = req.params;
        const { user } = req.user;

        const userId = user._id;

        if (!pinId) {
            return res.status(400).json({ success: false, message: "Invalid Pin ID" });
        }

        const pin = await Pin.findById(pinId);
        if (!pin) {
            return res.status(404).json({ success: false, message: "Pin Not Found" });
        }

        const index = pin.likes.indexOf(userId);

        if(index === -1){
            pin.likes.push(userId);
        }else{
            pin.likes.splice(index, 1);
        }

      
        await pin.save();

        return res.status(200).json({ success: true, message: "success" });
    } catch (err) {
        console.error(`❌ deletePin controller error :: ${err.message}`);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const SavePin = async (req, res) => {
    try {
        const { pinId } = req.params;
        const { user } = req.user;

        const userId = user._id;

        if (!pinId) {
            return res.status(400).json({ success: false, message: "Invalid Pin ID" });
        }

        const pin = await Pin.findById(pinId);
        if (!pin) {
            return res.status(404).json({ success: false, message: "Pin Not Found" });
        }

        const index = pin.saved.indexOf(userId);

        if(index === -1){
            pin.saved.push(userId);
        }else{
            pin.saved.splice(index, 1);
        }

      
        await pin.save();

        return res.status(200).json({ success: true, message: "success" });
    } catch (err) {
        console.error(`❌ deletePin controller error :: ${err.message}`);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

