import { asyncHandler } from "../../../utils/errorHandling.js";
import cloudinary from "../../../utils/cloudinary.js";
import userModel from "../../../../DB/model/User.model.js";


export const getUser = asyncHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id).select("userName")
    return res.json({ message: 'Done', user })
})

export const uploadPicture = asyncHandler(async (req, res, next) => {
    const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path, { folder: `${process.env.APP_NAME}/${req.user._id}/profile` })
    const user = await userModel.findByIdAndUpdate(req.user._id, { profilePicture: { secure_url, public_id } })
    await cloudinary.uploader.destroy(user.profilePicture.public_id)
    return res.status(200).json({ message: 'Done', user })
})