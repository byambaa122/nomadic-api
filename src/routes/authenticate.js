import express from 'express'
import validate from './../middlewares/validate.middleware'
import register from './../controllers/auth/register.controller'
import login from './../controllers/auth/login.controller'

const router = express.Router()

router.post('/login', validate(login.validator), login.index)
router.post('/register', validate(register.validator), register.index)

export default router
