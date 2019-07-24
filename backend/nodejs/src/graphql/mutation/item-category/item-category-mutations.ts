import { ItemCategoryType } from '../../types/item-category';
import { GraphQLString, GraphQLID } from 'graphql';
import itemCategoryRepository from '../../../data/repository/item-category-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const itemCategoryMutations: IMutationFields = {
    createItemCategory: {
        type: ItemCategoryType,
        args: {name: {type: GraphQLString}, description: {type: GraphQLString}},
        resolve: (source: any, {name, description}) =>
                    itemCategoryRepository.save({name, description})
    },
    deleteItemCategory: {
        type: ItemCategoryType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemCategoryRepository.remove(id)
    }
};
