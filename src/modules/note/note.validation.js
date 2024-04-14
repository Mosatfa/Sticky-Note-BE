import joi from "joi";
import { generalFields } from "../../middleware/validation.js";



export const getNotes = joi.object({
    listId: generalFields.id,
}).required()

export const createNote = joi.object({
    listId: generalFields.id,
    title: joi.string().min(2).max(150).required(),
    description: joi.string().min(2).max(1500).required(),
    color : joi.string().required(),
}).required()

export const updateNote = joi.object({
    noteId: generalFields.id,
    title: joi.string().min(2).max(150).required(),
    description: joi.string().min(2).max(1500).required(),
    color : joi.string().required(),
}).required()

export const deleteNote = joi.object({
    noteId: generalFields.id,
}).required()
