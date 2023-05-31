const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  console.log("get all users");
  res.json({ message: "get all user route" });
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user.length != 0) {
      res.json({ message: "already registered" });
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const userObj = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      try {
        const newUser = await userObj.save();
        const tokenData = { email: req.body.email };
        const accessToken = jwt.sign(
          tokenData,
          process.env.ACCESS_TOKEN_SECRET
        );
        res.status(201).json({ accessToken: accessToken });
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
      }
    }
  } catch (err) {
    res.status(401).json({ message: err.message || "Something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user.length == 0) {
      res.json({ message: "User not registered" });
    } else {
        const result = await bcrypt.compare(req.body.password, user[0].password);
        if(result){
            const tokenData = { email: req.body.email };
        const accessToken = jwt.sign(
          tokenData,
          process.env.ACCESS_TOKEN_SECRET
        );
        res.status(201).json({ accessToken: accessToken });
        }
        else{
            console.log('being called')
            res.status(400).json({ message: "Invalid password" });
        }
    }
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
