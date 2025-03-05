import { buildSchema } from "graphql";

const UserTypeDefs = buildSchema(`
    type User {
      id: ID!
      name: String
      username: String,
      email: String,
      status: Status,
      role: Role,
    }

    type JustUser {
      id: ID!
      name: String
      username: String,
      email: String,
      status: Int,
      role: Int,
    }

    type Role {
      id: ID!
      name: String
    }

    type Status {
      id: ID!
      name: String
    }

    type Query {
      getAllUsers: [JustUser]
      getAllUsersWithStatusAndRole: [User]
      usersByRole(role: Int!): [User]
      searchUser(param: String!): [User]
      userById(id: ID!): User
      createUser(name: String!, username: String!, email: String!, status: Int!, role: Int!): Boolean
      updateUser(id: ID!, name: String!, username: String!, email: String!): Boolean
      
    }
`);

export default UserTypeDefs;

//deleteUser(id: ID!): Boolean
