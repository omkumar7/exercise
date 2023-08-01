const express = require('express');
const router = express.Router();
const Comment = require("../Controller/commentController")
const auth =require("../Authenticate/authen");
const joiValidation =require("../helper/joi_validation");

router.post("/createcomment",joiValidation.comment,auth.userAuthenticate,Comment.createComment);


module.exports = router;