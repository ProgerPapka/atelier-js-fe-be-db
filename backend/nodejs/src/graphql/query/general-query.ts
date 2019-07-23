import { seasonQuyries } from './season/season-queries';
import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { find } from 'lodash';
import { UserType } from './../types/user';

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...seasonQuyries
    }
});
