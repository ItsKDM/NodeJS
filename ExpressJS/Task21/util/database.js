const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Application@121', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
