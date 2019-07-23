import { GraphQLID, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { UserType } from './user';
import { ItemType } from './item';

export const TopType = new GraphQLObjectType({
    name: 'top',
    fields: {
        id: {type: GraphQLID},
        value: {type: GraphQLInt},
        item: {type: ItemType},
        user: {type: UserType}
    }
});
