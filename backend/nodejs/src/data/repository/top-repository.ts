import { ITopDocument } from './../model/top';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Top, { ITop } from '../model/top';

interface ITopRepository extends IBasicReadableRepository<ITop, ITopDocument>,
                                          IBasicModifiableRepository<ITop, ITopDocument> {
}

class TopRepository implements ITopRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<ITop, ITopDocument> {
        return Top.findById(id);
    }

    public findByItem(item: Schema.Types.ObjectId): DocumentQuery<Array<ITop>, ITopDocument> {
        return Top.find({item});
    }

    public findAll(): DocumentQuery<Array<ITop>, ITopDocument> {
        return Top.find();
    }

    public save(top: ITop): Promise<ITopDocument> {
        return new Top(top).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<ITop, ITopDocument> {
        return Top.findByIdAndDelete(id);
    }
}

export default new TopRepository();
