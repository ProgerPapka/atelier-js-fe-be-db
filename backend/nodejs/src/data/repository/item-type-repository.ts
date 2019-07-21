import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import ItemType, { IItemType } from '../model/item-type';

interface IItemTypeRepository extends IBasicReadableRepository<IItemType>,
                                          IBasicModifiableRepository<IItemType> {
    findByName: (name: string) => IItemType;
}

class ItemTypeRepository implements IItemTypeRepository {

    public findById(id: Schema.Types.ObjectId): IItemType {
        return null;
    }

    public findByName(name: string): IItemType {
        return null;
    }

    public findAll(): Array<IItemType> {
        return null;
    }

    public save(itemType: IItemType): Promise<IItemType> {
        return new ItemType(itemType).save();
    }

    public remove(id: Schema.Types.ObjectId): IItemType {
        return null;
    }
}

export default new ItemTypeRepository();
