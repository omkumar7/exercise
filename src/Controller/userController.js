
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");


const User = require("../model/user");
const UserService = require("../service/user");



function format(data, status = 200, message = 'ok') {
    return { status, message, data }
}

const createUser = async (req, res) => {
    try {
        const check = await UserService.findUser({ 'username': req.body.username });
        if (check) return res.status(403).json(format(null, 403, 'username not Available,Please try another username'))

      

        const pass = bcrypt.hashSync(req.body.password, 7);
        req.body.password = pass;

        const data = await UserService.createUser(req.body);
        
        res.status(200).json(format(null, 200, "user created"))
    } catch (error) {
        res.status(400).json(format(null, 400, "" + error))
    }
}

const login = async (req, res) => {
   
  
    try {
      
            const access_token = jwt.sign(req.body, process.env.TOKEN);
            res.json(format(access_token))
       
    } catch (error) {
        res.status(400).json(format(null, 400, "" + error));
    }
}

const getAllUser = async (req, res) => {
    try {
        const data = await UserService.getAllUser();
        res.status(200).json(format(data))
    } catch (error) {
        res.status(400).json(format(null, 400, error))
    }
}





module.exports={
createUser,getAllUser,login
}