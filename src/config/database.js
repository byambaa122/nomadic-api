import mongoose from 'mongoose'

/**
 * Mongo DB connection URI
 * 
 * @var {String} uri
 */
const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

mongoose.connect(uri, {
    useNewUrlParser: true
})
