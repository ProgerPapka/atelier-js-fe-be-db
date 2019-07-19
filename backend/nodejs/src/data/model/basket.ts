import { Document, Schema, model } from 'mongoose';

export interface IBasket extends Document {
    price: number;
    items: Array<Schema.Types.ObjectId>;
}

export const BasketSchema = new Schema({
    price: {
        type: Number,
        required: true,
        default: 0
    },
    items: [Schema.Types.ObjectId]
});

export default model<IBasket>('Basket', BasketSchema);
