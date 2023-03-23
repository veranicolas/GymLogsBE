import { Router } from 'express'
import { exerciseController } from '../controllers/exercise.controller'
const router = Router()

// create exercise log

router.get('/exercise/:id', exerciseController.getAll)

router.post('/exercise', exerciseController.create)

export { router }