import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import Top, { ITop } from '../model/top';

interface ITopRepository extends IBasicReadableRepository<ITop>,
                                          IBasicModifiableRepository<ITop> {
}

class TopRepository implements ITopRepository {

    public findById(id: Schema.Types.ObjectId): ITop {
        return null;
    }

    public findAll(): Array<ITop> {
        return null;
    }

    public save(top: ITop): Promise<ITop> {
        return new Top(top).save();
    }

    public remove(id: Schema.Types.ObjectId): ITop {
        return null;
    }
}

export default new TopRepository();
