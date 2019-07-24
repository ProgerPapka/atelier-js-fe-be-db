import { IQueryFields } from '../../types/basic/query-fields';
import { ItemCategoryType } from '../../types/item-category';
import { GraphQLID, GraphQLList } from 'graphql';
import itemCategoryRepository from '../../../data/repository/item-category-repository';

export const itemCategoryQueries: IQueryFields = {
    itemCategory: {
        type: ItemCategoryType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemCategoryRepository.findById(id)
    },
    itemCategories: {
        type: new GraphQLList(ItemCategoryType),
        resolve: () => itemCategoryRepository.findAll()
    }
};
