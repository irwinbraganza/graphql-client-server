import { merge } from 'lodash';

import {typeDef as User, resolvers as userResolvers} from './schemas/users';
import {typeDef as Role, resolvers as roleResolvers} from './schemas/roles';
import {typeDef as Hello, resolvers as helloResolvers} from './schemas/hello';

const Query = `
  type Query {
    _empty: String
  }
`;

export const typeDefs = [ Query, User, Role, Hello ];
export const resolvers = merge({}, userResolvers, roleResolvers, helloResolvers);