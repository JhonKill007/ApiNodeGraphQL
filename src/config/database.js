import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 1433,
  dialect: "mssql",
  dialectOptions: {
    options: {
      trustServerCertificate: true, // Permite conexiones sin certificado SSL
    },
  },
  logging: false, // Opcional: deshabilita logs de SQL en consola
});

export default sequelize;
