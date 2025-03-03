import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { buildSchema } from "graphql";
import typeDefs from "./src/typeDefs.js";
import resolvers from "./src/resolvers.js";
import sequelize from "./src/sequelize/sequelize.js";

// Método para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
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
