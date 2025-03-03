import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs/typeDefs.js";
import resolvers from "./resolvers/resolvers.js";
import sequelize from "./config/database.js";

// Método para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');

    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: false }); // <-- Crea las tablas automáticamente
    console.log('Tablas sincronizadas correctamente.');
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
