import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { Status } from "./Status.js";
import { Role } from "./Role.js";

export const User = sequelize.define("TBL_Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "ID",
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
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "StatusID",
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "RoleID",
  },
});

