import { GraphQLID, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { ItemType } from './item';
import { filter } from 'lodash';

export const FavoriteType = new GraphQLObjectType({
    name: 'favorite',
    fields: {
        id: {type: GraphQLID},
        items: {
            type: new GraphQLList(ItemType),
            args: {name: {type: GraphQLString}},
            resolve: (source, {name}) => name
                ? filter(source.items, (item) => item && item.name && item.name.contains(name))
                : source.items
        }
    }
});
