import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import Season, { ISeason } from '../model/season';

interface ISeasonRepository extends IBasicReadableRepository<ISeason>,
                                          IBasicModifiableRepository<ISeason> {
    findByName: (name: string) => ISeason;
}

class SeasonRepository implements ISeasonRepository {

    public findById(id: Schema.Types.ObjectId): ISeason {
        return null;
    }

    public findByName(name: string): ISeason {
        return null;
    }

    public findAll(): Array<ISeason> {
        return null;
    }

    public save(season: ISeason): Promise<ISeason> {
        return new Season(season).save();
    }

    public remove(id: Schema.Types.ObjectId): ISeason {
        return null;
    }
}

export default new SeasonRepository();
