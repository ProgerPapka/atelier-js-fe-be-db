import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import Basket, { IBasket } from '../model/basket';

interface IBasketRepository extends IBasicReadableRepository<IBasket>,
                                          IBasicModifiableRepository<IBasket> {
}

class BasketRepository implements IBasketRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IBasket, IBasket> {
        return Basket.findById(id);
    }

    public findAll(): DocumentQuery<Array<IBasket>, IBasket> {
        return Basket.find();
    }

    public save(basket: IBasket): Promise<IBasket> {
        return new Basket(basket).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IBasket, IBasket>  {
        return Basket.findByIdAndDelete(id);
    }
}

export default new BasketRepository();
