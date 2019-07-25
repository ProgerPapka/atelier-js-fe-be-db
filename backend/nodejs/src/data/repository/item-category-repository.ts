import { IItemCategoryDocument } from './../model/item-category';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import ItemCategory, { IItemCategory } from '../model/item-category';

interface IItemCategoryRepository extends IBasicReadableRepository<IItemCategory, IItemCategoryDocument>,
                                          IBasicModifiableRepository<IItemCategory, IItemCategoryDocument> {
    findByName: (name: string) => DocumentQuery<Array<IItemCategory>, IItemCategoryDocument> ;
}

class ItemCategoryRepository implements IItemCategoryRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IItemCategory, IItemCategoryDocument> {
        return ItemCategory.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IItemCategory>, IItemCategoryDocument> {
        return ItemCategory.find({name});
    }

    public findAll(): DocumentQuery<Array<IItemCategory>, IItemCategoryDocument> {
        return ItemCategory.find();
    }

    public save(itemCategory: IItemCategory): Promise<IItemCategoryDocument> {
        return new ItemCategory(itemCategory).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IItemCategory, IItemCategoryDocument> {
        return ItemCategory.findByIdAndDelete(id);
    }
}

export default new ItemCategoryRepository();
