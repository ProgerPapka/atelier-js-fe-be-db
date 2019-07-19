import { GraphQLSchema } from 'graphql';
import { Query } from '../query';

export const Schema = new GraphQLSchema({
    query: Query,
});
