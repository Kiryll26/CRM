const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJwt = (id, email, role, name) => {
    return jwt.sign({ id, email, role, name }, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class UserController {
    async signup(req, res, next) {
        const { email, password, role, name } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('A user with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        await User.create({ email, role, password: hashPassword, name })
        return res.json({
            result: 1,
            message: 'the user has been successfully registered',
        })
    }

    async signin(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Invalid password specified'))
        }
        const token = generateJwt(user.id, user.email, user.role, user.name)
        return res.json(token)
    }

    async auth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.name)
        return res.json(token)
    }
}

module.exports = new UserController()
