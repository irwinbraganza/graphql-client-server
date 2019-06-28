export const typeDef = `
  extend type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'hello server!',
  }
};