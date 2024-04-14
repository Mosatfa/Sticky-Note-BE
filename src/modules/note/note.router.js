import * as noteController from "./controller/note.js"
import * as validitors from "./note.validation.js"
import auth from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import { Router } from "express";

const router = Router({ mergeParams: true })
// /list/:listId/note/...
router.get('/', auth, validation(validitors.getNotes), noteController.getUserNotes)
router.post('/', auth, validation(validitors.createNote), noteController.createNote)
router.put('/:noteId/update', auth, validation(validitors.updateNote), noteController.updateNote)
router.delete('/:noteId/delete', auth, validation(validitors.deleteNote), noteController.deleteNote)


export default router
