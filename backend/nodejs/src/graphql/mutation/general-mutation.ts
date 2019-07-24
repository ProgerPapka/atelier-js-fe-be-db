import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { find } from 'lodash';
import { UserType } from './../types/user';
import { seasonMutations } from './season';
import { basketMutations } from './basket';
import { favoriteMutations } from './favorite';
import { fileMutations } from './file';
import { itemMutations } from './item';
import { itemCategoryMutations } from './item-category';
import { itemTypeMutations } from './item-type';
import { userMutations } from './user';
import { userAddressMutations } from './user-address';
import { userRoleMutations } from './user-role';

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...seasonMutations,
        ...basketMutations,
        ...favoriteMutations,
        ...fileMutations,
        ...itemMutations,
        ...itemCategoryMutations,
        ...itemTypeMutations,
        ...userMutations,
        ...userAddressMutations,
        ...userRoleMutations
    }
});
