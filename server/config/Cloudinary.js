import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { config } from "dotenv";

config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define General Storage (for different uploads)
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "pinterest-clone",
    format: async (req, file) => file.mimetype.split("/")[1], // Auto-detect format
    public_id: (req, file) => `upload-${Date.now()}`,
    resource_type: "image",
  },
});

// Define Pin Storage (specifically for Pins)
const Pinstorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "pinterest-clone/pins",
    format: async (req, file) => "png", // Convert to PNG
    public_id: (req, file) => `pin-${Date.now()}`, // Unique ID
    resource_type: "image",
  },
});

// Initialize Multer
export const upload = multer({ storage }); // General file upload
export const PinUpload = multer({ storage: Pinstorage }); // Pin-specific upload
