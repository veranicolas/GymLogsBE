import { Router } from 'express'
import { userController } from '../controllers/user.controller'
const router = Router()

// create user
router.post('/user', userController.create)

router.post('/user/login', userController.login)

export { router }