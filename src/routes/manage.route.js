import express from 'express'
import validate from './../middlewares/validate.middleware'
import user from './../controllers/manage/user.controller'

const router = express.Router()

router.get('/users', user.index)
router.get('/users/:id', user.show)
router.put('/users/:id', validate(user.validator), user.update)
router.delete('/users/:id', user.destroy)

export default router
