export default (err, req, res, next) => {
    if (err.message === 'Validation failed') {
        const errors = err.mapped()
        return res.status(422).json({ errors })
    }

    res.status(err.status || 500).json({
        error: err.message
    })
}
