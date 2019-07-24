import { ItemTypeType } from '../../types/item-type';
import { GraphQLString, GraphQLID } from 'graphql';
import itemTypeRepository from '../../../data/repository/item-type-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const itemTypeMutations: IMutationFields = {
    createItemType: {
        type: ItemTypeType,
        args: {name: {type: GraphQLString}, description: {type: GraphQLString}},
        resolve: (source: any, {name, description}) =>
                    itemTypeRepository.save({name, description})
    },
    deleteItemType: {
        type: ItemTypeType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemTypeRepository.remove(id)
    }
};
