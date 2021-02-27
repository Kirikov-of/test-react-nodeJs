const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Task = sequelize.define("task", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
  text: { type: DataTypes.STRING },
});

module.exports = Task;
