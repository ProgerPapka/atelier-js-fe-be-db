import { seasonQuyries } from './season/season-queries';
import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { userAddressQueries } from './user-address/user-address-queries';
import { userRoleQueries } from './user-role/user-role-queries';
import { topQueries } from './top/top-queries';
import { favoriteQueries } from './favorite/favorite-queries';
import { fileQueries } from './file/file-queries';
import { itemCagetgoryQueries } from './item-category/item-category-queries';
import { itemTypeQueries } from './item-type/item-type-queries';

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...seasonQuyries,
        ...userAddressQueries,
        ...userRoleQueries,
        ...topQueries,
        ...favoriteQueries,
        ...fileQueries,
        ...itemCagetgoryQueries,
        ...itemTypeQueries
    }
});
