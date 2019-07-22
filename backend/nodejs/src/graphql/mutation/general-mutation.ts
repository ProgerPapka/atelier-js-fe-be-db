import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { find } from 'lodash';
import { UserType } from './../types/user';

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {id: {type: GraphQLInt}}
        }
    }
});
