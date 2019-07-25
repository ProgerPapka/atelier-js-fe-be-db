import { BasketType } from '../../types/basket';
import { GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import basketRepository from '../../../data/repository/basket-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const basketMutations: IMutationFields = {
    addToBasket: {
        type: BasketType,
        args: {
            id: {type: GraphQLID},
            itemIds: {type: new GraphQLList(GraphQLID)}
        },
        resolve: (source: any, {id, itemIds}) =>
            basketRepository.addItems(id, itemIds)
    },
    removeFromBasket: {
        type: BasketType,
        args: {
            id: {type: GraphQLID},
            itemIds: {type: new GraphQLList(GraphQLID)}
        },
        resolve: (source: any, {id, itemIds}) =>
            basketRepository.removeItems(id, itemIds)
    }
};
