require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

const UserService = require("../service/user");

function format(data, status = 200, message = 'ok') {
    return { status, message, data }
}

const userAuthenticate = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).json(format(null, 401, 'Not Authorized'));

        jwt.verify(token, process.env.TOKEN, async (err, user) => {
            if (err) {

                return res.status(403).json(format(null, 403, " " + err));
            }
            const data = await User.query().findOne({ username: user.username });


            if (data == null) return res.status(404).json(format(null, 404, "Username is wrong "));

            const checkPass = bcrypt.compareSync(user.password, data.password);
            if (!checkPass) return res.status(404).json(format(null, 404, "Password is wrong "));
            req.user = data;
            next();

        })
    } catch (error) {
        res.status(500).json(format(null, 500, error));
    }
}





module.exports = {
    userAuthenticate
}