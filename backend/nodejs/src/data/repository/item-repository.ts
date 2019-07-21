import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import Item, { IItem } from '../model/item';

interface IItemRepository extends IBasicReadableRepository<IItem>,
                                          IBasicModifiableRepository<IItem> {
    findByName: (name: string) => IItem;
}

class ItemRepository implements IItemRepository {

    public findById(id: Schema.Types.ObjectId): IItem {
        return null;
    }

    public findByName(name: string): IItem {
        return null;
    }

    public findAll(): Array<IItem> {
        return null;
    }

    public save(item: IItem): Promise<IItem> {
        return new Item(item).save();
    }

    public remove(id: Schema.Types.ObjectId): IItem {
        return null;
    }
}

export default new ItemRepository();
