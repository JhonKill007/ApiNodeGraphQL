import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
    type User {
      Id: ID!
      Name: String
      Username: String,
      Email: String,
      Rool: Int,
    }

    type Query {
      users: [User]
      user(id: ID!): User
      createUser(id: ID!, name: String!, username: String!, email: String!, rool: Int!): Boolean
      updateUser(id: ID!, name: String!, username: String!, email: String!, rool: Int!): Boolean
      deleteUser(id: ID!): Boolean
    }
`);

export default typeDefs;
