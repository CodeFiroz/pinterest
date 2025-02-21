export const uploadPost = async (req, res) => {
    try{

        console.log(req.body);
        console.log("----------------------");
        console.log(req.files);
        

    }catch(err){
        console.log("Error on uploadPost", err);
        return res.status(500).json({success: false, message: "Internal server error", err});
    }
}