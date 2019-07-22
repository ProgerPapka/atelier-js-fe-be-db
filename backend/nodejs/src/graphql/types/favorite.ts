import { GraphQLID, GraphQLObjectType, GraphQLFloat, GraphQLList } from 'graphql';
import { ItemType } from './item';

export const FavoriteType = new GraphQLObjectType({
    name: 'favorite',
    fields: {
        id: {type: GraphQLID},
        items: {
            type: new GraphQLList(ItemType)
        }
    }
});
