import { map } from 'lodash';
import { IBasket } from '../../model';
import itemRepository from '../../repository/item-repository';
import { prepareItem } from '../item/prepare-item';

export const prepareBasket = (basket: IBasket) => ({
    ...basket,
    items: map(basket.items, async (itemId) => {
        const item = await itemRepository.findById(itemId).then();
        return prepareItem(item);
    })
});
