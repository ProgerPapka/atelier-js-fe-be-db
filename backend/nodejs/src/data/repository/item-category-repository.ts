import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import ItemCategory, { IItemCategory } from '../model/item-category';

interface IItemCategoryRepository extends IBasicReadableRepository<IItemCategory>,
                                          IBasicModifiableRepository<IItemCategory> {
    findByName: (name: string) => IItemCategory;
}

class ItemCategoryRepository implements IItemCategoryRepository {

    public findById(id: Schema.Types.ObjectId): IItemCategory {
        return null;
    }

    public findByName(name: string): IItemCategory {
        return null;
    }

    public findAll(): Array<IItemCategory> {
        return null;
    }

    public save(itemCategory: IItemCategory): Promise<IItemCategory> {
        return new ItemCategory(itemCategory).save();
    }

    public remove(id: Schema.Types.ObjectId): IItemCategory {
        return null;
    }
}

export default new ItemCategoryRepository();
