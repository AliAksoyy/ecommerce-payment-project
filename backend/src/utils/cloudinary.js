const dotenv = require("dotenv");
const cloudinaryModule = require("cloudinary");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "..", "config", ".env") });
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
