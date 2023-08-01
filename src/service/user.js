const User = require('../model/user');


const createUser = async(payloads)=>{
    return await User.query().insert(payloads)
};

const findUser = async(payloads)=>{
    return await User.query().findOne(payloads)
};
const getAllUser =async()=>{
    return await User.query()
};

const findUserById =async(payloads)=>{
    return await User.query().findById(payloads)
};


module.exports={
    createUser,findUser,findUserById,getAllUser
}