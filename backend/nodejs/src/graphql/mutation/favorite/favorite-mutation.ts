import { FavoriteType } from '../../types/favorite';
import { GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import favoriteRepository from '../../../data/repository/favorite-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const favoriteMutations: IMutationFields = {
    addToFavorite: {
        type: FavoriteType,
        args: {
            id: {type: GraphQLID},
            itemId: {type: GraphQLID}
        },
        resolve: (source: any, {id, itemId}) =>
            favoriteRepository.addItem(id, itemId)
    },
    removeFromFavorite: {
        type: FavoriteType,
        args: {
            id: {type: GraphQLID},
            itemsId: {type: new GraphQLList(GraphQLID)}
        },
        resolve: (source: any, {id, itemsId}) =>
            favoriteRepository.removeItems(id, itemsId)
    }
};
