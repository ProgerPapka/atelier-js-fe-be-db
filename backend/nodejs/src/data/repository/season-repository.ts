import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Season, { ISeason } from '../model/season';

interface ISeasonRepository extends IBasicReadableRepository<ISeason>,
                                          IBasicModifiableRepository<ISeason> {
    findByName: (name: string) =>  DocumentQuery<Array<ISeason>, ISeason>;
}

class SeasonRepository implements ISeasonRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<ISeason, ISeason> {
        return Season.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<ISeason>, ISeason> {
        return Season.find({name});
    }

    public findAll(): DocumentQuery<Array<ISeason>, ISeason> {
        return Season.find();
    }

    public save(season: {name: string, description: string}): Promise<ISeason> {
        return new Season({name: season.name, description: season.description}).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<ISeason, ISeason> {
        return Season.findByIdAndDelete(id);
    }
}

export default new SeasonRepository();
