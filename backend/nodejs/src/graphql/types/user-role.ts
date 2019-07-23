import { GraphQLID, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

export const UserRoleType = new GraphQLObjectType({
    name: 'user-role',
    fields: {
        id: {type: GraphQLID},
        role: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
