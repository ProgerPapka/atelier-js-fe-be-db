import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const ItemTypeType = new GraphQLObjectType({
    name: 'item-type',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
