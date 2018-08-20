import { validationResult } from 'express-validator/check'

export default (req, res, next) => {
    try {
        const errorFormatter = ({ msg }) => [msg]

        validationResult(req)
            .formatWith(errorFormatter)
            .throw()

        next()
    } catch (err) {
        next(err)
    }
}
