import Router from 'express'
import { validateUser } from '../controllers/auth.controllers'

const router = Router()

router.post('/login',validateUser)


export default router