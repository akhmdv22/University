const express = require('express');
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const Employee = require("../Models/Employee");
const router = express.Router();
const config = require('../configurations/config');


// Configure AWS SDK for S3
const s3 = new AWS.S3({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});

// Configure multer for S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.awsBucketName,
    acl: "public-read", // Allows public read access
    key: (req, file, cb) => {
      cb(null, `profile-images/${Date.now()}_${file.originalname}`); // Define file path in S3
    },
  }),
});

router.post("/upload-profile-image", upload.single("profileImage"), async (req, res) => {
    try {
      const id = req.query.id;
      const imageUrl = req.file.location
      const employee = await Employee.findById(id); 
      
      const result = await Employee.findByIdAndUpdate(id, {profileImageUrl: imageUrl}, {new: true});
     
      res.status(201).json({ 
            message: "Profile image uploaded successfully",
            profileImageUrl: result.profileImageUrl
      });
    } catch (error) {
      res.status(500).json({ message: "Error uploading image", error });
    }
  });
module.exports = router;