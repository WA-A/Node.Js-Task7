import Joi from 'joi';

export const RegisterSchema = Joi.object({
    UserName:Joi.string().min(3).max(20).required(),
    Email:Joi.string().email().required(),
    Password:Joi.string().min(5).required(),
    cPassword:Joi.valid(Joi.ref('Password')),
});