import { IBasketDocument } from './../model/basket';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Basket, { IBasket } from '../model/basket';

interface IBasketRepository extends IBasicReadableRepository<IBasket, IBasketDocument>,
                                          IBasicModifiableRepository<IBasket, IBasketDocument> {
    addItems: (id: Schema.Types.ObjectId, items: Array<Schema.Types.ObjectId>) =>
        DocumentQuery<IBasket, IBasketDocument>;
    removeItems: (id: Schema.Types.ObjectId, items: Array<Schema.Types.ObjectId>) =>
        DocumentQuery<IBasket, IBasketDocument>;
}

class BasketRepository implements IBasketRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IBasket, IBasketDocument> {
        return Basket.findById(id);
    }

    public findAll(): DocumentQuery<Array<IBasket>, IBasketDocument> {
        return Basket.find();
    }

    public save(basket: IBasket): Promise<IBasketDocument> {
        return new Basket(basket).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IBasket, IBasketDocument>  {
        return Basket.findByIdAndDelete(id);
    }

    public addItems(id: Schema.Types.ObjectId, items: Array<Schema.Types.ObjectId>):
        DocumentQuery<IBasket, IBasketDocument> {
            return Basket.findOneAndUpdate(
                id,
                {$push: {items}},
                {new: true, upsert: true}
            );
    }

    public removeItems(id: Schema.Types.ObjectId, items: Array<Schema.Types.ObjectId>):
        DocumentQuery<IBasket, IBasketDocument> {
            return Basket.findOneAndUpdate(
                id,
                {$pull: {items}},
                {new: true}
            );
    }
}

export default new BasketRepository();
