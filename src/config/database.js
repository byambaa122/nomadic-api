import mongoose from 'mongoose'

const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_DATABASE}`

mongoose.connect(uri, {
    useNewUrlParser: true
})
