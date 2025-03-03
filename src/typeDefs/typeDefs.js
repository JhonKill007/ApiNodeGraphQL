import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
    type User {
      id: ID!
      name: String
      username: String,
      email: String,
      role: Int,
    }

    type Query {
      users: [User]
      user(id: ID!): User
      createUser(name: String!, username: String!, email: String!, role: Int!): Boolean
      updateUser(id: ID!, name: String!, username: String!, email: String!, role: Int!): Boolean
      deleteUser(id: ID!): Boolean
    }
`);

export default typeDefs;
