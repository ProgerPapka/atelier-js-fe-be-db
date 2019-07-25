import { IItemCategory, IItemType, ISeason, IItem } from '../../model';
import itemCategoryRepository from '../../repository/item-category-repository';
import itemTypeRepository from '../../repository/item-type-repository';
import seasonRepository from '../../repository/season-repository';

export const prepareItem = async (item: IItem) => {
    const category = await itemCategoryRepository.findById(item.itemCategory).then();
    const type = await itemTypeRepository.findById(item.itemType).then();
    const season = await seasonRepository.findById(item.season).then();
    return {
        ...item,
        itemCategory: category,
        itemType: type,
        season
    };
};
