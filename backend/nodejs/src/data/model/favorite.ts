import { Document, Schema, model } from 'mongoose';

export interface IFavorite {
    items: Array<Schema.Types.ObjectId>;
}

export interface IFavoriteDocument extends IFavorite, Document {
    items: Array<Schema.Types.ObjectId>;
}

export const FavoriteSchema = new Schema({
    items: [Schema.Types.ObjectId]
});

export default model<IFavoriteDocument>('Favorite', FavoriteSchema);
