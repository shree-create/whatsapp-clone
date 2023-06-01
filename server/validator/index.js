const { body } = require("express-validator");

const loginSchema = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .exists()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters"),
];

const registerSchema = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .exists()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters"),
  body("name").exists().withMessage("Name cannot be empty"),
];

module.exports = { registerSchema, loginSchema };
