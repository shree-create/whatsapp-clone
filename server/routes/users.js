const express = require("express");
const router = express.Router();
const {loginUser, registerUser} = require('../controllers/auth/index');
const authMiddleware = require('../middleware/index');
const authSchema = require('../validator/index')

router.post("/signup",authSchema.registerSchema ,authMiddleware.registerValidator, registerUser);

router.post("/signin",authSchema.loginSchema, authMiddleware.loginValidator, loginUser);

module.exports = router;
