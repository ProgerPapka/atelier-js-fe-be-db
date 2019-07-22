import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import ItemCategory, { IItemCategory } from '../model/item-category';

interface IItemCategoryRepository extends IBasicReadableRepository<IItemCategory>,
                                          IBasicModifiableRepository<IItemCategory> {
    findByName: (name: string) => DocumentQuery<Array<IItemCategory>, IItemCategory> ;
}

class ItemCategoryRepository implements IItemCategoryRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IItemCategory, IItemCategory> {
        return ItemCategory.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IItemCategory>, IItemCategory> {
        return ItemCategory.find({name});
    }

    public findAll(): DocumentQuery<Array<IItemCategory>, IItemCategory> {
        return ItemCategory.find();
    }

    public save(itemCategory: IItemCategory): Promise<IItemCategory> {
        return new ItemCategory(itemCategory).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IItemCategory, IItemCategory> {
        return ItemCategory.findByIdAndDelete(id);
    }
}

export default new ItemCategoryRepository();
