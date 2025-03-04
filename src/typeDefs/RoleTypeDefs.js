import { buildSchema } from "graphql";

const RoleTypeDefs = buildSchema(`
    type Role {
      id: ID!
      name: String
    }

    type Query {
      getAllRole: [Role]
      roleById(id: ID!): Role
      createRole(name: String!): Boolean
      deleteRole(id: ID!): Boolean
    }
`);

export default RoleTypeDefs;
