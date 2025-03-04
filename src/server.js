import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//types
import RoleTypeDefs from "./typeDefs/RoleTypeDefs.js";
import StatusTypeDefs from "./typeDefs/StatusTypeDefs.js";
import UserTypeDefs from "./typeDefs/UserTypeDefs.js";

//resolver
import RoleResolvers from "./resolvers/RoleResolvers.js";
import StatusResolvers from "./resolvers/StatusResolvers.js";
import UserResolvers from "./resolvers/UserResolvers.js";

import sequelize from "./config/database.js";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import "./relations/Relations.js";

// Unir los esquemas y resolvers
const typeDefs = mergeTypeDefs([UserTypeDefs, RoleTypeDefs, StatusTypeDefs]);
const resolvers = mergeResolvers([
  UserResolvers,
  RoleResolvers,
  StatusResolvers,
]);


// Método para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente con la base de datos.");

    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: false }); // <-- Crea las tablas automáticamente
    console.log("Tablas sincronizadas correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

// Llama a la función para probar la conexión
testConnection();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
