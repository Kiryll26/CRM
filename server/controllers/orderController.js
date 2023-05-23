const { Orders } = require('../models/models')

class OrderController {
    async getAll(req, res) {
        const { limit = 9, page = 1 } = req.query
        const offset = page * limit - limit
        const orders = await Orders.findAndCountAll({ limit, offset })

        return res.json(orders)
    }

    async latestOrders(req, res) {
        const orders = await Orders.findAll({
            limit: 5,
            order: [['date', 'DESC']],
        })

        return res.json(orders)
    }
}

module.exports = new OrderController()
