const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const customerRouter = require('./customerRouter')
const orderRouter = require('./orderRouter')

router.use('/user', userRouter)
router.use('/orders', orderRouter)
router.use('/customers', customerRouter)

module.exports = router
