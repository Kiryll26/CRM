const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    'user',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: { type: DataTypes.STRING, unique: true },
        password: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: 'USER' },
    },
    {
        timestamps: false,
    }
)

const Orders = sequelize.define(
    'orders',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user: { type: DataTypes.STRING },
        date: { type: DataTypes.STRING, unique: true },
        total_price: { type: DataTypes.INTEGER },
        status: { type: DataTypes.INTEGER },
    },
    {
        timestamps: false,
    }
)

const Customers = sequelize.define(
    'customers',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: true },
        location: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        total_spend: { type: DataTypes.STRING },
        total_orders: { type: DataTypes.INTEGER },
    },
    {
        timestamps: false,
    }
)

module.exports = {
    User,
    Orders,
    Customers,
}
