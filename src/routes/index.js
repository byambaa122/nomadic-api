import express from 'express'
import passport from 'passport'
import validate from './../middlewares/validate.middleware'
import login from './../controllers/auth/login.controller'
import register from './../controllers/auth/register.controller'
import app from './../controllers/app.controller'

const router = express.Router()

// router.get('/auth/facebook', passport.authenticate('facebook'))
// router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }))
router.post('/login', validate(login.validator), login.index)
router.post('/register', validate(register.validator), register.index)

router.use(passport.authenticate('bearer', { session: false }))
router.get('/user', app.showProfile)

export default router
