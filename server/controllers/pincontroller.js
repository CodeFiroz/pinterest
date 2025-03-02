import Pin from "../models/pinmodel.js";

export const getPins = async (req, res)=>{
    try{

        const pins = await Pin.find();

        if(!pins){
            return res.status(400).json({success: false, message: "Failed to fetch pin"});
        }

        return res.status(201).json({success: true, message: "Pin fetch successfully", pins: pins});

    }catch(err){
        console.log(`❌ newPin controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const newPin = async (req, res)=>{
    try{

        console.log(req.file);
        const { title, description } = req.body;
        const pin  = req.file.path;
        const user = req.user;


        if(!title){
            return res.status(400).json({success: false, message: "Please add a title"});
        }

        const newPin = new Pin({
            title,
            description,
            Image: pin,
            creator: user._id
        });

        const savedPin = await newPin.save();

        if(!savedPin){
            return res.status(400).json({success: false, message: "Failed to save pin"});
        }

        return res.status(201).json({success: true, message: "Pin saved successfully", pin: savedPin._id});

    }catch(err){
        console.log(`❌ newPin controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

