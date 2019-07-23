import { IFavoriteDocument } from './../model/favorite';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Favorite, { IFavorite } from '../model/favorite';

interface IFavoriteRepository extends IBasicReadableRepository<IFavorite, IFavoriteDocument>,
                                          IBasicModifiableRepository<IFavorite, IFavoriteDocument> {
}

class FavoriteRepository implements IFavoriteRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IFavorite, IFavoriteDocument> {
        return Favorite.findById(id);
    }

    public findAll(): DocumentQuery<Array<IFavorite>, IFavoriteDocument> {
        return Favorite.find();
    }

    public save(favorite: IFavorite): Promise<IFavorite> {
        return new Favorite(favorite).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IFavorite, IFavoriteDocument> {
        return Favorite.findByIdAndDelete(id);
    }
}

export default new FavoriteRepository();
