import User from './../models/user.model';

const showProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id, '-password')
        res.json({ user })
    } catch (err) {
        next(err)
    }
}

export default {
    showProfile
}
