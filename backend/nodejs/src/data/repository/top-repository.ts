import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Top, { ITop } from '../model/top';

interface ITopRepository extends IBasicReadableRepository<ITop>,
                                          IBasicModifiableRepository<ITop> {
}

class TopRepository implements ITopRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<ITop, ITop> {
        return Top.findById(id);
    }

    public findAll(): DocumentQuery<Array<ITop>, ITop> {
        return Top.find();
    }

    public save(top: ITop): Promise<ITop> {
        return new Top(top).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<ITop, ITop> {
        return Top.findByIdAndDelete(id);
    }
}

export default new TopRepository();
