import * as listController from "./controller/list.js";
import * as validitors from "./list.validation.js"
import noteRouter from '../note/note.router.js'
import auth from "../../middleware/auth.js";

import { Router } from "express";
import { validation } from "../../middleware/validation.js";

const router = Router()

router.use('/:listId/note', noteRouter)

router.get('/', auth,listController.getUserList)
router.post('/create', auth, validation(validitors.createList), listController.createList)
router.patch('/:listId/update', auth, validation(validitors.updateList), listController.updateList)
router.delete('/:listId/delete', auth, validation(validitors.deleteList), listController.deleteList)


export default router
