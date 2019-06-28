export const typeDef = `
  extend type Query {
    user(id: Int!): User
  }
  type User {
    id: Int!
    firstName: String
    lastName: String
    role: Role
  }
`;

export const resolvers = {
  Query: {
    user: () => {'list users'},
  }
};