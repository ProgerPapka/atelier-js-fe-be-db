import { SeasonType } from './season';
import { ItemCategoryType } from './item-category';
import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { ItemTypeType } from './item-type';

export const ItemType = new GraphQLObjectType({
    name: 'item',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        itemCategory: {type: ItemCategoryType},
        itemType: {type: ItemTypeType},
        season: {type: SeasonType}
    }
});
