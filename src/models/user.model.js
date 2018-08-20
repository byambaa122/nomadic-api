import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const { Schema } = mongoose
const options = {
    timestamps: true
}

// const accountSchema = new Schema({

// })

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
}, options)

class UserClass {
    /**
     * @param {String} password
     * @return {Boolean}
     */
    validPassword(password) {
        return bcrypt.compareSync(password, this.password)
    }

    /**
     * @return {String}
     */
    generateToken() {
        const options = {
            expiresIn: process.env.TOKEN_LIFETIME
        }

        const payload = this.toJSON()
        const token = jwt.sign(payload, process.env.SECRET, options)

        return token
    }

    /**
     * @param {String} password
     * @return {String}
     */
    static hashPassword(password) {
        const salt = bcrypt.genSaltSync(10)

        return bcrypt.hashSync(password, salt)
    }
}

userSchema.loadClass(UserClass)

const User = mongoose.model('User', userSchema)

export default User
