import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { User } from "./User.js";

export const Role = sequelize.define("TBL_Roles", {
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
    unique: true,
  },
});

