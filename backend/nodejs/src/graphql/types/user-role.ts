import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserRoleType = new GraphQLObjectType({
    name: 'userRole',
    fields: {
        id: {type: GraphQLID},
        role: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
