const Posts = require('../model/posts');
const PostsService = require('../service/posts');



function format(data, status = 200, message = 'ok') {
    return { status, message, data }
}



const createPost =async(req,res)=>{
    try {
        req.body.user_id= req.user.id;
        const post = await PostsService.createPost(req.body);
        res.status(200).json(format(post));
    } catch (error) {
        res.status(400).json(format(null, 400, "" + error));
    }
}

module.exports={
    createPost
}