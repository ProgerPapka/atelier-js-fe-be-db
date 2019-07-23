import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { find } from 'lodash';
import { UserType } from './../types/user';
import { seasonMutations } from './season/season-mutations';

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...seasonMutations
    }
});
