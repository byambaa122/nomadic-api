import express from 'express'
import passport from 'passport'
import { checkSchema } from 'express-validator/check'
import validate from './../middlewares/validate.middleware'
import app from './../controllers/app.controller'
import login from './../controllers/auth/login.controller'
import register from './../controllers/auth/register.controller'

const router = express.Router()

// router.get('/auth/facebook', passport.authenticate('facebook'))
// router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }))
router.post('/login', checkSchema(login.validator), validate, login.index)
router.post('/register', checkSchema(register.validator), validate, register.index)

router.use(passport.authenticate('bearer', { session: false }))
router.get('/user', app.showProfile)

export default router
