import { merge } from 'lodash';

import {typeDef as User, resolvers as userResolvers} from './models/users';
import {typeDef as Role, resolvers as roleResolvers} from './models/roles';
import {typeDef as Hello, resolvers as helloResolvers} from './models/hello';

const Query = `
  type Query {
    _empty: String
  }
`;

export const typeDefs = [ Query, User, Role, Hello ];
export const resolvers = merge({}, userResolvers, roleResolvers, helloResolvers);