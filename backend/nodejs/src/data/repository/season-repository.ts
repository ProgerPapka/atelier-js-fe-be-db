import { ISeasonDocument } from './../model/season';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Season, { ISeason } from '../model/season';

interface ISeasonRepository extends IBasicReadableRepository<ISeason, ISeasonDocument>,
                                          IBasicModifiableRepository<ISeason, ISeasonDocument> {
    findByName: (name: string) =>  DocumentQuery<Array<ISeason>, ISeasonDocument>;
}

class SeasonRepository implements ISeasonRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<ISeason, ISeasonDocument> {
        return Season.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<ISeason>, ISeasonDocument> {
        return Season.find({name});
    }

    public findAll(): DocumentQuery<Array<ISeason>, ISeasonDocument> {
        return Season.find();
    }

    public save(season: ISeason): Promise<ISeason> {
        return new Season({name: season.name, description: season.description}).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<ISeason, ISeasonDocument> {
        return Season.findByIdAndDelete(id);
    }
}

export default new SeasonRepository();
