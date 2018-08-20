/**
 * @return {Object} user
 */
const showProfile = (req, res, next) => {
    res.json({ user: req.user })
}

export default {
    showProfile
}
