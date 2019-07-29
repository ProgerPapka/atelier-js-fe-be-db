import { IQueryFields } from '../../types/basic/query-fields';
import { ItemTypeType } from '../../types/item-type';
import { GraphQLID, GraphQLList } from 'graphql';
import itemCategoryRepository from '../../../data/repository/item-type-repository';

export const itemTypeQueries: IQueryFields = {
    itemType: {
        type: ItemTypeType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemCategoryRepository.findById(id)
    },
    itemTypes: {
        type: new GraphQLList(ItemTypeType),
        resolve: () => itemCategoryRepository.findAll()
    }
};
