import listModel from "../../../../DB/model/List.model.js";
import noteModel from "../../../../DB/model/Note.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getUserList = asyncHandler(async (req, res, next) => {
    const userLists = await listModel.find({ userId: req.user._id })
    return res.status(200).json({ message: "Done", results: userLists })
})

export const createList = asyncHandler(async (req, res, next) => {
    const { listName, color } = req.body
    const list = await listModel.create({ listName, color, userId: req.user._id })
    return res.status(201).json({ message: 'Done', list })
})

export const updateList = asyncHandler(async (req, res, next) => {
    const list = await listModel.updateOne({ _id: req.params.listId, userId: req.user._id }, { listName: req.body.listName })
    return list.matchedCount ? res.status(200).json({ message: 'Done', list }) : next(new Error("In-valid list Id", { cause: 400 }))
})

export const deleteList = asyncHandler(async (req, res, next) => {
    const list = await listModel.findOneAndDelete({ _id: req.params.listId, userId: req.user.id })
    if (!list) {
        return next(new Error("In-valid list Id", { cause: 400 }))
    }
    await noteModel.deleteMany({ listId: req.params.listId, userId: req.user._id })
    return res.status(200).json({ message: 'Done' })
})
