import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Status = sequelize.define("TBL_Statuses", {
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
