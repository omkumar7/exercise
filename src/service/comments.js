const Comments = require('../model/comment');


const createComment = async(payloads)=>{
    return await Comments.query().insert(payloads);
}

module.exports={
    createComment
};