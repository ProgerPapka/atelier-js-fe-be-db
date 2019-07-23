import { Document, Schema, model } from 'mongoose';

export interface IItem {
  name: string;
  description?: string;
  itemCategory: Schema.Types.ObjectId;
  itemType: Schema.Types.ObjectId;
  season: Schema.Types.ObjectId;
}

export interface IItemDocument extends IItem, Document {
}

export const ItemSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  itemCategory: Schema.Types.ObjectId,
  itemType: Schema.Types.ObjectId,
  season: Schema.Types.ObjectId
});

export default model<IItemDocument>('Item', ItemSchema);
