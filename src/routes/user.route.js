import express from 'express'
import validate from './../middlewares/validate.middleware'
import app from './../controllers/app.controller'

const router = express.Router()

router.get('/user', app.showProfile)

export default router
