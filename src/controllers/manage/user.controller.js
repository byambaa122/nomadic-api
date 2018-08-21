import User from './../../models/user.model'

const index = async (req, res, next) => {
    try {
        const users = await User.find({}, '-password')
        res.json({ users })
    } catch (err) {
        next(err)
    }
}

const show = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, '-password')
        res.json({ user })
    } catch (err) {
        next(err)
    }
}

const validator = {
    name: {
        isEmpty: {
            errorMessage: 'Нэр оруулна уу',
            negated: true
        }
    },
    email: {
        isEmpty: {
            errorMessage: 'И-мэйл хаяг оруулна уу',
            negated: true
        },
        isEmail: {
            errorMessage: 'Зөвшөөрөгдсөн и-мэйл хаяг оруулна уу'
        }
    },
    role: {
        isEmpty: {
            errorMessage: 'Хэрэглэгчийн эрх сонгоно уу',
            negated: true
        },
        isIn: {
            errorMessage: 'Хэрэглэгчийн эрх сонгоно уу',
            options: [
                ['user', 'admin']
            ]
        }
    }
}

const update = async (req, res, next) => {
    try {
        const { name, email, role } = req.body
        const user = await User.findByIdAndUpdate(req.params.id, { name, email, role }, { new: true })
        res.json({ user })
    } catch (err) {
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        res.json({ user })
    } catch (err) {
        next(err)
    }
}

export default {
    index,
    update,
    destroy,
    validator,
    show
}
