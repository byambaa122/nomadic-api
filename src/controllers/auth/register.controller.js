import User from './../../models/user.model'

const validator = {
    email: {
        isEmail: {
            errorMessage: 'И-мэйл хаяг оруулна уу'
        }
    },
    password: {
        isLength: {
            errorMessage: 'Нууц үг хамгийн багадаа 6 тэмдэгт агуулсан байх шаардлагатай',
            options: { min: 6 }
        }
    }
}

const index = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.create({
            email,
            password: User.hashPassword(password)
        })

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
