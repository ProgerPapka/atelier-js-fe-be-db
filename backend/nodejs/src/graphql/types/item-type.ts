import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const ItemTypeType = new GraphQLObjectType({
    name: 'itemType',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
