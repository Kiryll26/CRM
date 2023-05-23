const { Customers } = require('../models/models')
const ApiError = require('../error/ApiError')

class CustomersController {
    async getAll(req, res) {
        const { limit = 9, page = 1 } = req.query
        const offset = page * limit - limit
        const customers = await Customers.findAndCountAll({ limit, offset })

        return res.json(customers)
    }

    async topCustomers(req, res) {
        const customers = await Customers.findAll({
            limit: 5,
            order: [['total_orders', 'DESC']],
        })

        return res.json(customers)
    }
}

module.exports = new CustomersController()
