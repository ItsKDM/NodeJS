const Sequelize = require("sequelize");
const sequelize = new Sequelize("booking_appointment_app", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
