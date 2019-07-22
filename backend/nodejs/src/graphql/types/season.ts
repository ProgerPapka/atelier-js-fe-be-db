import { GraphQLID, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { ItemType } from './item';

export const SeasonType = new GraphQLObjectType({
    name: 'season',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    }
});
