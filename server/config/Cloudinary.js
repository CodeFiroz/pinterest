import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage  } from "multer-storage-cloudinary"
import { config } from "dotenv"

config();

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Define Storage
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "pinterest-clone",
      allowedFormats: ["jpg", "jpeg", "png"],
    },
  });

  // Initialize Multer
export const upload = multer({ storage });
