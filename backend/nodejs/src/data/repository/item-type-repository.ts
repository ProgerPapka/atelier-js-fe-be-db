import { IItemTypeDocument } from './../model/item-type';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import ItemType, { IItemType } from '../model/item-type';

interface IItemTypeRepository extends IBasicReadableRepository<IItemType, IItemTypeDocument>,
                                          IBasicModifiableRepository<IItemType, IItemTypeDocument> {
    findByName: (name: string) =>  DocumentQuery<Array<IItemType>, IItemTypeDocument>;
}

class ItemTypeRepository implements IItemTypeRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IItemType, IItemTypeDocument> {
        return ItemType.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IItemType>, IItemTypeDocument> {
        return ItemType.find({name});
    }

    public findAll(): DocumentQuery<Array<IItemType>, IItemTypeDocument> {
        return ItemType.find();
    }

    public save(itemType: IItemType): Promise<IItemTypeDocument> {
        return new ItemType(itemType).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IItemType, IItemTypeDocument> {
        return ItemType.findByIdAndDelete(id);
    }
}

export default new ItemTypeRepository();
