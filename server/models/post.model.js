import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: ""
    },
    description: {
        type: String,
        trim: true,
        default: ""
    },
    image: {
        type: String,
        required: true
    },
    author:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

export default Post;