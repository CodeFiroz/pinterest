import User from '../models/usermodel.js'

export const signUp = async (req, res)=>{
    try{

        const {name, username, email, password} = req.body;

        if(!name || !username || !email || !password){
            return res.status(400).json({success: false, message: "Inavlid data recieved"});
        }

        const checkUsername = await User.findOne({username});

        if(checkUsername){
            return res.status(400).json({success: false, message: `${username} is already taken. Try diffrent username`});
        }


    }catch(err){
        console.log(`❌ signUp controller error :: ${err}`);
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}
