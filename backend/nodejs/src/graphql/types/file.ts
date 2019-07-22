import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { ItemType } from './item';

export const BasketType = new GraphQLObjectType({
    name: 'basket',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        link: {type: GraphQLString}
    }
});
