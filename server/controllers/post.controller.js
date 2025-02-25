import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const uploadPost = async (req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).json({ success: false, message: "File upload failed!" });
        }

        const { title, description } = req.body;

        const imageURL = req.file.path;

        const userId = req.user._id;

        const newPost = new Post({
            title,
            description,
            image: imageURL,
            author: userId
        })

        await newPost.save();

        await User.findByIdAndUpdate(userId, {
            $push: { posts: newPost._id }
        });


        return res.status(200).json({ success: true, message: "Post uploaded successfully!", post: newPost });
    } catch (err) {
        console.log("Error on uploadPost", err);
        return res.status(500).json({ success: false, message: "Internal server error", err });
    }
};


export const getPost = async (req, res) =>{

    try{

        const posts = await Post.find();

        return res.status(200).json({ posts });


    }catch(err){
        console.log("Error on uploadPost", err);
        return res.status(500).json({ success: false, message: "Internal server error", err });
    }

}

export const getSinglePost = async (req, res) =>{

    try{

        const {id} = req.params;

        if(!id){
            console.log(id);
            return res.status(400).json({ success: false, message: "Invalid Post" });
        }

        const post = await Post.findById(id).populate("author", "_id name pic") ;

        if(!post){
            console.log(id);
            
            return res.status(400).json({ success: false, message: "404 Not found"});
        }

        return res.status(200).json({ post });


    }catch(err){
        console.log("Error on uploadPost", err);
        return res.status(500).json({ success: false, message: "Internal server error", err });
    }

}

export const getMyPost = async (req, res) =>{

    try{

        const myid =  req.id;
        const posts = await Post.find();


        return res.status(200).json({ posts });


    }catch(err){
        console.log("Error on GettingPost", err);
        return res.status(500).json({ success: false, message: "Internal server error", err });
    }

}
