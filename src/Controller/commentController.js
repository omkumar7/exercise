const Comments = require('../service/comments');


function format(data, status = 200, message = 'ok') {
    return { status, message, data }
}

const createComment = async(req,res)=>{
    try {
        req.body.user_id = req.user.id;
        const comment = await Comments.createComment(req.body)
        res.status(200).json(format(comment))
    } catch (error) {
        res.status(400).json(format(null,400,""+error))
    }
}

module.exports={
    createComment
}