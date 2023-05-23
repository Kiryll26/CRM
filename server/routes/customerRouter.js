const Router = require('express')
const router = new Router()
const customerController = require('../controllers/customerController')

router.get('/', customerController.getAll)
router.get('/top', customerController.topCustomers)

module.exports = router