const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_app', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
