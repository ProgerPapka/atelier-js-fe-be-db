import { Document, Schema, model } from 'mongoose';

export interface IItem extends Document {
  name: string;
  description?: string;
  itemCategory: Schema.Types.ObjectId;
  itemType: Schema.Types.ObjectId;
  season: Schema.Types.ObjectId;
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

export default model<IItem>('Item', ItemSchema);
