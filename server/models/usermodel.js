import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: ""
    },
    pfp: {
        type: String,
        default: "https://res.cloudinary.com/dvfkgzbqc/image/upload/v1740749274/pfp_knqdte.png"
    },
    cover: {
        type: String,
        default: "https://res.cloudinary.com/dvfkgzbqc/image/upload/v1740749282/cover_nzlg5m.png"
    },
    likedPin: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pins'
        }
    ],
    savedPin: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pins'
        }
    ],
    resetToken: {
        type: String,
        default: null
    },
    resetTokenExpiry: {
        type: String,
        default: null
    },

},
{timestamps: true}
)

const User = mongoose.model("User", userSchema);

export default User;