import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import helmet from 'helmet'
import cors from 'cors'
import handleError from './middlewares/handle.error.middleware'
import router from './routes'
import './config/database'
import './config/passport'

const app = express()

app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(passport.initialize())

app.use('/api/v1', router)

app.use((req, res, next) => {
    const err = new Error('No HTTP resource was found that matches the request URI')
    next(err)
})

app.use(handleError)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
