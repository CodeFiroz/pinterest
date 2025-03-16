import mongoose from "mongoose";

const pinSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    saved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            text: String,
            postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
},
    {timstamps: true}
);

const Pin = mongoose.model("Pin", pinSchema);

export default Pin;