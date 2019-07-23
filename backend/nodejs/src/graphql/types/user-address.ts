import { GraphQLID, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { ItemType } from './item';

export const UserAddressType = new GraphQLObjectType({
    name: 'user-address',
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
