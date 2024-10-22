const Joi = require('joi');

const EmployeeValidations = {
    createORupdateEmployeeValidator: {
        body: Joi.object({
            name: Joi.string().min(2).max(255).required(),
            surname: Joi.string().min(2).max(255).required(),
            phone: Joi.string().min(4).max(20).required().pattern(/^\+|\d[\s\d\-\(\)]*\d$/)
        })
    }
}

module.exports = EmployeeValidations;