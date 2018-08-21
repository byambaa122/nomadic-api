export default (role) => (req, res, next) => {
    if (!req.user || req.user.role !== role) {
        return res.status(403).json({
            message: 'Permission denied'
        })
    }

    next()
}
