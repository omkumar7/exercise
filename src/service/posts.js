const Posts = require('../model/posts');


const createPost = async(payloads)=>{
    return await Posts.query().insert(payloads);
}
const getAllPosts = async()=>{
    return await Posts.query();
}
const deletePost = async(Id)=>{
    return await Posts.query().deleteById(Id);
}

module.exports={
    createPost,getAllPosts,deletePost
}