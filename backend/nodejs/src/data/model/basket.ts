import { IBasket } from './basket';
import { IIdentity } from './identity';
import { Item } from './item';

export interface IBasket extends IIdentity {
    price: number;
    items: Array<Item>;
}

export class Basket implements IBasket {
    public id: number;
    public price: number;
    public items: Array<Item>;

    constructor({id}: IIdentity) {
        this.id = id;
        this.price = 0;
        this.items = new Array<Item>();
    }
}
