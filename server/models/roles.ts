export const typeDef = `
  extend type Query {
    role(id: Int!): Role
  }
  type Role {
    id: Int!
    name: String
  }
`;

export const resolvers = {
  Query: {
    role: () => {'list roles'},
  }
};