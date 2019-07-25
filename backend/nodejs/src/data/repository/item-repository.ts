import { IItemDocument } from './../model/item';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Item, { IItem } from '../model/item';

interface IItemRepository extends IBasicReadableRepository<IItem, IItemDocument>,
                                          IBasicModifiableRepository<IItem, IItemDocument> {
    findByName: (name: string) => DocumentQuery<Array<IItem>, IItemDocument>;
    findByLikeName: (name: string) => DocumentQuery<Array<IItem>, IItemDocument>;
    findByCategory: (category: Schema.Types.ObjectId) => DocumentQuery<Array<IItem>, IItemDocument>;
    findByType: (type: Schema.Types.ObjectId) => DocumentQuery<Array<IItem>, IItemDocument>;
    findBySeason: (season: Schema.Types.ObjectId) => DocumentQuery<Array<IItem>, IItemDocument>;
}

class ItemRepository implements IItemRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IItem, IItemDocument> {
        return Item.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IItem>, IItemDocument> {
        return Item.find({name});
    }

    public findByLikeName(name: string): DocumentQuery<Array<IItem>, IItemDocument> {
        return Item.find({name: new RegExp(`^${name}$`, 'i')});
    }

    public findByCategory(category: Schema.Types.ObjectId): DocumentQuery<Array<IItem>, IItemDocument> {
        return Item.find({itemCategory: category});
    }

    public findByType(type: Schema.Types.ObjectId): DocumentQuery<Array<IItem>, IItemDocument> {
        return Item.find({itemType: type});
    }

    public findBySeason(season: Schema.Types.ObjectId): DocumentQuery<Array<IItem>, IItemDocument> {
        return Item.find({season});
    }

    public findAll(): DocumentQuery<Array<IItem>, IItemDocument> {
        return Item.find();
    }

    public save(item: IItem): Promise<IItemDocument> {
        return new Item(item).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IItem, IItemDocument> {
        return Item.findByIdAndDelete(id);
    }
}

export default new ItemRepository();
