import jwt from 'jsonwebtoken'
import passport from 'passport'
// import passportFacebook from 'passport-facebook'
import passportHttpBearer from 'passport-http-bearer'
import User from './../models/user.model'

// const FacebookStrategy = passportFacebook.Strategy
const BearerStrategy = passportHttpBearer.Strategy

// const options = {
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: `${process.env.APP_URL}/auth/facebook/callback`
// }

// passport.use(new FacebookStrategy(options, async (accessToken, refreshToken, profile, callback) => {
//     try {
//         const user = await User.findOrCreate({ email: profile.email })

//         callback(null, user)
//     } catch (err) {
//         callback(err)
//     }
// }))

passport.use(new BearerStrategy(async (token, callback) => {
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        const user = await User.findById(payload._id)

        callback(null, user || false)
    } catch (err) {
        callback(err)
    }
}))
