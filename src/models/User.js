import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize/sequelize.js";

export const User = sequelize.define("Users", {
  Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: DataTypes.STRING,
  Username: DataTypes.STRING,
  Email: DataTypes.STRING,
  Rool: DataTypes.STRING,
});

// discountPercent: DataTypes.FLOAT,
// payMethod: DataTypes.STRING,
// createDate: DataTypes.DATE,
// byDelivery: DataTypes.BOOLEAN,
// userCode: DataTypes.STRING,
// rncOCedula: DataTypes.STRING,
// razonSocial: DataTypes.STRING,
// payWith: DataTypes.FLOAT,
// branchId: DataTypes.STRING,
// isActive: DataTypes.BOOLEAN,
