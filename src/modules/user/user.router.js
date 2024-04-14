import auth from "../../middleware/auth.js";
import { fileUpload, fileValidation } from "../../utils/multer.js";
import * as userController from "./controller/user.js"
import { Router } from "express";

const router = Router()

router.get('/', auth, userController.getUser)
router.patch('/upload', auth, fileUpload(fileValidation.image).single('image'), userController.uploadPicture)


export default router
