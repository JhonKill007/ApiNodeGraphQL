import { Sequelize } from "sequelize";

const sequelize = new Sequelize("graphql", "sa", "R00TP@22w0r231920", {
  host: "94.72.114.203",
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
