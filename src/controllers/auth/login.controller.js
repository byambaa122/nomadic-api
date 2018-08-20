import User from './../../models/user.model'

const validator = {
    email: {
        isEmpty: {
            errorMessage: 'Please enter an email address',
            negated: true
        },
        isEmail: {
            errorMessage: 'Please enter a valid email address'
        }
    },
    password: {
        isEmpty: {
            errorMessage: 'Please enter a password',
            negated: true
        }
    }
}

const index = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user || !user.validPassword(password)) {
            const errors = {
                email: ['Sorry, your password was incorrect']
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
