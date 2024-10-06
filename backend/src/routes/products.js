// const { Product } = require("../models/Product");
const { auth, isUser, isAdmin } = require("../middleware/auth");
const cloudinary = require("../utils/cloudinary");

const router = require("express").Router();

router.post("/", isAdmin, async (req, res) => {
  const a = req.body;

  console.log(a);

 
});

module.exports = router;
