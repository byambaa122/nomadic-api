import User from './../../models/user.model'

const validator = {
    email: {
        isEmail: {
            errorMessage: 'И-мэйл хаяг оруулна уу'
        }
    }
}

const index = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user || !user.validPassword(password)) {
            const errors = {
                email: ['И-мэйл хаяг эсвэл нууц үг буруу байна']
            }
            return res.status(422).json({ errors })
        }

        const token = user.generateToken()
        res.json({ token })
    } catch (err) {
        next(err)
    }
}

export default {
    validator,
    index
}
