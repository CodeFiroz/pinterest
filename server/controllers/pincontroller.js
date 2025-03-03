import Pin from "../models/pinmodel.js";

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
            return res.status(400).json({success: false, message: "Invaild post id "});
        }

        const pin = await Pin.findById(pinId).populate("creator", "name pfp username");

        if(!pin){
            return res.status(400).json({success: false, message: "Can't find pin "});
        }

        return res.status(201).json({success: true, message: "Pin fetch successfully", pin});

    }catch (err) {
        console.error(`❌ pinGet controller error :: ${err.message}`);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

