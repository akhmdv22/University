const Joi = require('joi');

const MessageValidations = {
    createORupdateMessageValidator: {
        body: Joi.object({
            block: Joi.string().min(1).max(1).required(),
            room: Joi.number().min(0).max(999).required(),
            message: Joi.string().min(5).max(999).required() 
        })
    }
}

module.exports = MessageValidations;