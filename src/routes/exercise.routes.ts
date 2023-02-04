import { Router } from 'express'
import { exerciseController } from '../controllers/exercise.controller'
const router = Router()

// create exercise log
router.post('/exercise', exerciseController.create)

router.get('/exercise/:id', exerciseController.getAll)

export { router }