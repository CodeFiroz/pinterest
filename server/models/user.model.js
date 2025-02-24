import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        default: ""
    },
    posts : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    saveposts : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},
    {timestamps: true}
);

const User = mongoose.model('User', UserSchema);

export default User;