import { FileType } from './file';
import { FavoriteType } from './favorite';
import { UserRoleType } from './user-role';
import { BasketType } from './basket';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { UserAddressType } from './user-address';

export const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        surname: {type: GraphQLString},
        middlename: {type: GraphQLString},
        phone: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        basket: {type: BasketType},
        userRole: {type: UserRoleType},
        userAddress: {type: UserAddressType},
        favorite: {type: FavoriteType},
        avatar: {type: FileType}
    }
});
