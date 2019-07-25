import { map } from 'lodash';
import { IQueryFields } from '../../types/basic/query-fields';
import { FavoriteType } from '../../types/favorite';
import { GraphQLID, GraphQLList } from 'graphql';
import favoriteRepository from '../../../data/repository/favorite-repository';
import itemRepository from '../../../data/repository/item-repository';

export const favoriteQueries: IQueryFields = {
    favorite: {
        type: FavoriteType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => favoriteRepository.findById(id)
    },
    favorites: {
        type: new GraphQLList(FavoriteType),
        resolve: (source: any, {id}) =>
            favoriteRepository.findById(id).then((favorite) => ({
                items: favorite &&
                    map(
                        favorite.items,
                        (item) => itemRepository.findById(item)
                    )
            }))
    }
};
