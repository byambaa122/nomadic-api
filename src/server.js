import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import helmet from 'helmet'
import cors from 'cors'
import checkRole from './middlewares/check.role.middleware'
import handleError from './middlewares/handle.error.middleware'
import appRoute from './routes/app.route'
import authenticateRoute from './routes/authenticate.route'
import manageRoute from './routes/manage.route'
import userRoute from './routes/user.route'
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

// Application routes
app.use('/api', appRoute)
// Authentication routes
app.use('/api', authenticateRoute)
// Require authentication routes 
app.use('/api', passport.authenticate('bearer', { session: false }), userRoute)
// Require admin role
app.use('/api', checkRole('admin'), manageRoute)

// Handle 404 error
app.use((req, res, next) => {
    const err = new Error('No HTTP resource was found that matches the request URI')
    next(err)
})

// Handle all errors
app.use(handleError)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
