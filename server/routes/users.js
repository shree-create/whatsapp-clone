const express = require("express");
const router = express.Router();
const {loginUser, registerUser} = require('../controllers/auth/index');

router.post("/signup", registerUser);

router.post("/signin", loginUser);

module.exports = router;
