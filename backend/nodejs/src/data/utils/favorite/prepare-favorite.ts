import { map } from 'lodash';
import { IFavorite } from '../../model';
import itemRepository from '../../repository/item-repository';
import { prepareItem } from '../item/prepare-item';

export const prepareFavorite = (favorite: IFavorite) =>
    map(favorite.items, async (itemId) => {
        const item = await itemRepository.findById(itemId).then();
        return prepareItem(item);
    });
