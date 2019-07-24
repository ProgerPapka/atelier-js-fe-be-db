import { IQueryFields } from '../../types/basic/query-fields';
import { ItemCategoryType } from '../../types/item-category';
import { GraphQLID, GraphQLList } from 'graphql';
import itemCagetgoryRepository from '../../../data/repository/item-category-repository';

export const itemCagetgoryQueries: IQueryFields = {
    itemCagetgory: {
        type: ItemCategoryType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemCagetgoryRepository.findById(id)
    },
    itemCagetgories: {
        type: new GraphQLList(ItemCategoryType),
        resolve: () => itemCagetgoryRepository.findAll()
    }
};
