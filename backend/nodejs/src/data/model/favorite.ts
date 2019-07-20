import { Document, Schema, model } from 'mongoose';

export interface IFavorite extends Document {
    items: Array<Schema.Types.ObjectId>;
}

export const FavoriteSchema = new Schema({
    items: [Schema.Types.ObjectId]
});

export default model<IFavorite>('Favorite', FavoriteSchema);
