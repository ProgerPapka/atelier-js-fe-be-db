import { Document, Schema, model } from 'mongoose';

export interface IBasket {
    price: number;
    items: Array<Schema.Types.ObjectId>;
}

export interface IBasketDocument extends IBasket, Document {
}

export const BasketSchema = new Schema({
    price: {
        type: Number,
        required: true,
        default: 0
    },
    items: [Schema.Types.ObjectId]
});

export default model<IBasketDocument>('Basket', BasketSchema);
