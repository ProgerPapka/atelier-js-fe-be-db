import { GraphQLID, GraphQLObjectType, GraphQLFloat, GraphQLList } from 'graphql';
import { ItemType } from './item';

export const BasketType = new GraphQLObjectType({
    name: 'basket',
    fields: {
        id: {type: GraphQLID},
        price: {type: GraphQLFloat},
        items: {
            type: new GraphQLList(ItemType)
        }
    }
});
