const joi = require("joi");


function format(data, status = 200, message = 'ok') {
    return { status, message, data }
}

function validate(req, res, next) {
    const valid = joi.object({
        name: joi.string().required(),
        username: joi.string().required(),
        password: joi.required(),
        email: joi.string().email().required(),
        phoneNumber: joi.number().required()
    })

    const validation = valid.validate(req.body);
    if (validation.error) {
        return res.status(400).json(format(validation.error.details))
    }
    next();
};
function comment(req, res, next) {
    const valid = joi.object({
        comments: joi.string().required(),
        post_id: joi.number().required(),
    })

    const validation = valid.validate(req.body);
    if (validation.error) {
        return res.status(400).json(format(validation.error.details))
    }
    next();
};

function loginValidate(req, res, next) {
    const valid = joi.object({
        username: joi.string().required(),
        password: joi.required()
    })

    const validation = valid.validate(req.body);
    if (validation.error) {
        return res.status(400).json(format(validation.error.details))
    }
    next();
};


module.exports = {
    validate, comment,loginValidate
};