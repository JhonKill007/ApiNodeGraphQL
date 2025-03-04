import { buildSchema } from "graphql";

const StatusTypeDefs = buildSchema(`
    type Status {
      id: ID!
      name: String
    }

    type Query {
      getAllStatus: [Status]
      statusById(id: ID!): Status
      createStatus(name: String!): Boolean
      deleteStatus(id: ID!): Boolean
    }
`);

export default StatusTypeDefs;
