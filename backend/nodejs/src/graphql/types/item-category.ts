import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const ItemCategoryType = new GraphQLObjectType({
    name: 'item-category',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
