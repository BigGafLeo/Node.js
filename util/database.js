const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "1Piotrek", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
