import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Item, { IItem } from '../model/item';

interface IItemRepository extends IBasicReadableRepository<IItem>,
                                          IBasicModifiableRepository<IItem> {
    findByName: (name: string) => DocumentQuery<Array<IItem>, IItem>;
}

class ItemRepository implements IItemRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IItem, IItem> {
        return Item.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IItem>, IItem> {
        return Item.find({name});
    }

    public findAll(): DocumentQuery<Array<IItem>, IItem>{
        return Item.find();
    }

    public save(item: IItem): Promise<IItem> {
        return new Item(item).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IItem, IItem> {
        return Item.findByIdAndDelete(id);
    }
}

export default new ItemRepository();
