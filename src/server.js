import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import UserTypeDefs from "./typeDefs/UserTypeDefs.js";
import UserResolvers from "./resolvers/UserResolvers.js";
import sequelize from "./config/database.js";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";


// Unir los esquemas y resolvers
const typeDefs = mergeTypeDefs([UserTypeDefs]);
const resolvers = mergeResolvers([UserResolvers]);

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
