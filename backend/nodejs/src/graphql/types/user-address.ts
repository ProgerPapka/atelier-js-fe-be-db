import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserAddressType = new GraphQLObjectType({
    name: 'userAddress',
    fields: {
        id: {type: GraphQLID},
        region: {type: GraphQLString},
        city: {type: GraphQLString},
        street: {type: GraphQLString},
        house: {type: GraphQLString},
        floor: {type: GraphQLString},
        flat: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
