import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const ItemType = new GraphQLObjectType({
    name: 'item',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
