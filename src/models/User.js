import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "Id",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "Name",
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "Username",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "Email",
  },
  role: {
    type: DataTypes.INTEGER,
    field: "Role",
  },
});
