const express = require('express');
const router = express.Router();
const Post = require("../Controller/postsController")
const auth =require("../Authenticate/authen");
const joiValidation =require("../helper/joi_validation");

router.post("/createpost",auth.userAuthenticate,Post.createPost);


module.exports = router;