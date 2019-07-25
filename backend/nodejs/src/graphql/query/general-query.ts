import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { seasonQueries } from './season';
import { userAddressQueries } from './user-address';
import { userRoleQueries } from './user-role';
import { topQueries } from './top';
import { favoriteQueries } from './favorite';
import { fileQueries } from './file';
import { itemCategoryQueries } from './item-category';
import { itemTypeQueries } from './item-type';
import { basketQueries } from './basket';
import { itemQueries } from './item';
import { userQueries } from './user';

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...basketQueries,
        ...favoriteQueries,
        ...fileQueries,
        ...itemQueries,
        ...itemCategoryQueries,
        ...itemTypeQueries,
        ...seasonQueries,
        ...topQueries,
        ...userAddressQueries,
        ...userRoleQueries,
        ...userQueries
    }
});
