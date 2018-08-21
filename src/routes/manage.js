import express from 'express'
import validate from './../middlewares/validate.middleware'
import user from './../controllers/manage/user.controller'

const router = express.Router()

router.get('/users', user.index)

export default router
