import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { find } from 'lodash';
import { UserType } from './../types/user';

export const Query = new GraphQLObjectType({
    name: 'query',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLInt}}
        },
        users: {
            type: GraphQLList(UserType)
        }
    }
});
