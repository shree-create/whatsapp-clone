const { validationResult } = require("express-validator");

const registerValidator = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({message: errors.array()[0].msg})
    }
    next();
}

const loginValidator = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({message: errors.array()[0].msg})
    }
    next();
}

module.exports =  { registerValidator, loginValidator };