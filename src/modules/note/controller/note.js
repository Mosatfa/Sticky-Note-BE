import listModel from "../../../../DB/model/List.model.js";
import noteModel from "../../../../DB/model/Note.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getUserNotes = asyncHandler(async (req, res, next) => {
    const userNotes = await noteModel.find({ listId: req.params.listId, userId: req.user._id })
    return res.status(200).json({ message: 'Done', results: userNotes })
})

export const createNote = asyncHandler(async (req, res, next) => {
    const { title, description, color } = req.body
    const list = await listModel.findOne({ _id: req.params.listId, userId: req.user._id })
    if (!list) {
        next(new Error("In-valid list Id", { cause: 400 }))
    }
    const note = await noteModel.create({ title, description, color, userId: req.user._id, listId: req.params.listId })
    return res.status(201).json({ message: 'Done', note })
})

export const updateNote = asyncHandler(async (req, res, next) => {
    const note = await noteModel.updateOne({ _id: req.params.noteId, userId: req.user._id }, req.body)
    return note.matchedCount ? res.status(200).json({ message: 'Done', note }) : next(new Error("In-valid note Id", { cause: 400 }))
})

export const deleteNote = asyncHandler(async (req, res, next) => {
    const note = await noteModel.deleteOne({ _id: req.params.noteId, userId: req.user._id })
    return note.deletedCount ? res.status(200).json({ message: 'Done', note }) : next(new Error("In-valid note Id", { cause: 400 }))
})

