import joi from "joi";
import { generalFields } from "../../middleware/validation.js";



export const signUp = joi.object({
    userName: joi.string().min(2).max(100).required(),
    email: generalFields.email,
    password: generalFields.password,
    cPassword: generalFields.password.valid(joi.ref('password')).messages({'any.only':'Confirm password not match password'})
}).required()

export const token = joi.object({
    token: joi.string().required()
}).required()

export const login = joi.object({
    email: generalFields.email,
    password: generalFields.password
}).required()

export const sendCode = joi.object({
    email: generalFields.email,
}).required()

export const forgetPassword = joi.object({
    code: joi.string().pattern(/^[0-9]*$/).required(),
    newPassword: generalFields.password,
    cPassword: generalFields.password.valid(joi.ref('newPassword')).messages({'any.only':'Confirm password not match password'})
}).required()