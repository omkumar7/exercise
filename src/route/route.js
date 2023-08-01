const express = require("express");
const route = express.Router();
const user_routes = require('./user')
const posts_route = require("./posts")
const comment_route = require("./comment")
const cors = require('cors')
route.use(cors())

route.use("/api/v1/user",user_routes);
route.use("/api/v1/post",posts_route);
route.use("/api/v1/comment",comment_route);


module.exports = {route};