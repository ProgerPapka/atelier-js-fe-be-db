import { GraphQLID, GraphQLObjectType, GraphQLFloat, GraphQLList, GraphQLString, Source } from 'graphql';
import { filter } from 'lodash';
import { ItemType } from './item';

export const BasketType = new GraphQLObjectType({
    name: 'basket',
    fields: {
        id: {type: GraphQLID},
        price: {type: GraphQLFloat},
        items: {
            type: new GraphQLList(ItemType),
            args: {name: {type: GraphQLString}},
            resolve: (source, {name}) => name
                ? filter(source.items, (item) => item && item.name && item.name.contains(name))
                : source.items
        }
    }
});
