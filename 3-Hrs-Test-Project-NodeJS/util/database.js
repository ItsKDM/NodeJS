const Sequelize = require("sequelize");
const sequelize = new Sequelize('general_store', 'root', 'password', {
    dialect : 'mysql',
    host: 'localhost'
});
module.exports = sequelize;