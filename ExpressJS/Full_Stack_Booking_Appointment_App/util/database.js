const Sequelize = require("sequelize");
const sequelize = new Sequelize("booking_appointment_app", "root", "Application@121", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;