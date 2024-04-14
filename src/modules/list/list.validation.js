import joi from "joi";
import { generalFields } from "../../middleware/validation.js";



export const createList = joi.object({
    listName: joi.string().min(2).max(50).required(),
    color : joi.string().required()
}).required()

export const updateList = joi.object({
    listId: generalFields.id,
    listName: joi.string().min(2).max(50).required()
}).required()

export const deleteList = joi.object({
    listId: generalFields.id,
}).required()

