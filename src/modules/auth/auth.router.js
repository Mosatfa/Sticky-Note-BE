import * as authController from "./controller/auth.js"
import * as validitors from "./auth.validation.js"
import { Router } from "express";
import { validation } from "../../middleware/validation.js";

const router = Router()


router.post('/signUp',
    validation(validitors.signUp),
    authController.signUp
)
router.get('/confirmEmail/:token',
    validation(validitors.token),
    authController.confirmEmail
)

router.get('/reqNewConfirmEmail/:token',
    validation(validitors.token),
    authController.requestNewConfirmEmail
)

router.post('/login',
    validation(validitors.login),
    authController.logIn
)

router.post('/loginWithGmail',
    authController.loginWithGmail
)

router.post('/sendCode',
    validation(validitors.sendCode),
    authController.sendCode
)

router.patch('/forgetPassword',
    validation(validitors.forgetPassword),
    authController.forgetPassword
)




export default router



