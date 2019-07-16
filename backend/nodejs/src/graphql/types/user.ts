import { BasketType } from './basket';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const UserGraphqlType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        surname: {type: GraphQLString},
        middlename: {type: GraphQLString},
        phone: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        basket: {type: BasketType}
    }
});
