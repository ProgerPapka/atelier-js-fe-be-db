import { map } from 'lodash';
import { IQueryFields } from './../../types/basic/query-fields';
import { BasketType } from './../../types/basket';
import { GraphQLList, GraphQLID } from 'graphql';
import basketRepository from '../../../data/repository/basket-repository';
import itemRepository from '../../../data/repository/item-repository';

export const basketQueries: IQueryFields = {
    baskets: {
        type: new GraphQLList(BasketType),
        resolve: () => basketRepository.findAll(),
    },
    basket: {
        type: new GraphQLList(BasketType),
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) =>
            basketRepository.findById(id).then((basket) => ({
                price: basket && basket.price,
                items: basket &&
                    map(
                        basket.items,
                        (item) => itemRepository.findById(item)
                    )
            }))
    }
};
