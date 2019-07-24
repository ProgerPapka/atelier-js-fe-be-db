import { IQueryFields } from '../../types/basic/query-fields';
import { ItemTypeType } from '../../types/item-type';
import { GraphQLID, GraphQLList } from 'graphql';
import itemCagetgoryRepository from '../../../data/repository/item-type-repository';

export const itemTypeQueries: IQueryFields = {
    itemType: {
        type: ItemTypeType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemCagetgoryRepository.findById(id)
    },
    itemTypes: {
        type: new GraphQLList(ItemTypeType),
        resolve: () => itemCagetgoryRepository.findAll()
    }
};
