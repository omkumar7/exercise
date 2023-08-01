const express = require('express');
const router = express.Router();
const User = require("../Controller/userController")
const auth =require("../Authenticate/authen");
const joiValidation =require("../helper/joi_validation");

router.post("/createuser",joiValidation.validate,User.createUser);
router.post("/login",joiValidation.loginValidate,User.login);
router.get("/allusers",User.getAllUser);


module.exports = router;