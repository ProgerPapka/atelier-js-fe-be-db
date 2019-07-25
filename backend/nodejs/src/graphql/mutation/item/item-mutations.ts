import { ItemType } from '../../types/item';
import { GraphQLString, GraphQLID } from 'graphql';
import itemRepository from '../../../data/repository/item-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const itemMutations: IMutationFields = {
    createItem: {
        type: ItemType,
        args: {
            name: {type: GraphQLString},
            description: {type: GraphQLString},
            itemCategory: {type: GraphQLID},
            itemType: {type: GraphQLID},
            season: {type: GraphQLID},
        },
        resolve: (source: any, {name, description, itemCategory, itemType, season}) =>
                    itemRepository.save({name, description,  itemCategory, itemType, season})
    },
    deleteItem: {
        type: ItemType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemRepository.remove(id) // TODO: remove all links
    }
};
