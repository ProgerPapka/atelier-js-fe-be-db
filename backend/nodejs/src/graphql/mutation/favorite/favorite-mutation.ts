import { FavoriteType } from '../../types/favorite';
import { GraphQLString, GraphQLID } from 'graphql';
import favoriteRepository from '../../../data/repository/favorite-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const favoriteMutations: IMutationFields = {
    addToFavorite: {
        type: FavoriteType,
        args: {
            id: {type: GraphQLID},
            itemId: {type: GraphQLID}
        },
        resolve: (source: any, {id, itemId}) => null // TODO: implement
    },
    removeFromFavorite: {
        type: FavoriteType,
        args: {
            id: {type: GraphQLID},
            itemId: {type: GraphQLID}
        },
        resolve: (source: any, {id, itemId}) => null // TODO: implement
    }
};
