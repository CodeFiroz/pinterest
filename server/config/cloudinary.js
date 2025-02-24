import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: "dvfkgzbqc",
  api_key: "883773155464945",
  api_secret: "7Op0VWSKIvGkgQOwlLTvWVqtOoI",
});

// Multer storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder
    format: async (req, file) => "png", // Convert all images to PNG
    public_id: (req, file) => file.originalname.split(".")[0], // Keep filename
  },
});


// Set up storage for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/");  // Make sure this folder exists
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "-" + file.originalname);
//     }
//   });

const upload = multer({ storage });

export { upload, cloudinary };
