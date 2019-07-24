import { BasketType } from '../../types/basket';
import { GraphQLString, GraphQLID } from 'graphql';
import basketRepository from '../../../data/repository/basket-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const basketMutations: IMutationFields = {
    addToBasket: {
        type: BasketType,
        args: {
            id: {type: GraphQLID},
            itemId: {type: GraphQLID}
        },
        resolve: (source: any, {id, itemId}) => null // TODO: implement
    },
    removeFromBasket: {
        type: BasketType,
        args: {
            id: {type: GraphQLID},
            itemId: {type: GraphQLID}
        },
        resolve: (source: any, {id, itemId}) => null // TODO: implement
    }
};
