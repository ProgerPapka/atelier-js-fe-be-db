import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import ItemType, { IItemType } from '../model/item-type';

interface IItemTypeRepository extends IBasicReadableRepository<IItemType>,
                                          IBasicModifiableRepository<IItemType> {
    findByName: (name: string) =>  DocumentQuery<Array<IItemType>, IItemType>;
}

class ItemTypeRepository implements IItemTypeRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IItemType, IItemType> {
        return ItemType.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IItemType>, IItemType> {
        return ItemType.find({name});
    }

    public findAll(): DocumentQuery<Array<IItemType>, IItemType> {
        return ItemType.find();
    }

    public save(itemType: IItemType): Promise<IItemType> {
        return new ItemType(itemType).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IItemType, IItemType> {
        return ItemType.findByIdAndDelete(id);
    }
}

export default new ItemTypeRepository();
