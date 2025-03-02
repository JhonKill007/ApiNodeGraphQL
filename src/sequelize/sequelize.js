import { Sequelize } from "sequelize";

const sequelize = new Sequelize("JDDataBase01", "sa", "", {
  dialect: "mssql",
  dialectOptions: {
    options: {
      trustedConnection: true,
      trustServerCertificate: true,
    },
  },
  host: "DESKTOP-62RJQ8L\\SQLEXPRESS",
  logging: console.log,
  port: 1443,
});

export default sequelize;
