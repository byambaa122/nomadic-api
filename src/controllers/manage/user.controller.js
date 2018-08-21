import User from './../../models/user.model'

const index = async (req, res, next) => {
    try {
        const users = await User.find({}, '-password')
        res.json({ users })
    } catch (err) {
        next(err)
    }
}

export default {
    index
}
