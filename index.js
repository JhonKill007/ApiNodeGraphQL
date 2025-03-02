import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { buildSchema } from "graphql";
import typeDefs from "./src/typeDefs.js";
import resolvers from "./src/resolvers.js";
import sequelize from "./src/sequelize/sequelize.js";

await sequelize.sync();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
