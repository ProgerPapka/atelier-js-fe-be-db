import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const FileType = new GraphQLObjectType({
    name: 'file',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        link: {type: GraphQLString}
    }
});
