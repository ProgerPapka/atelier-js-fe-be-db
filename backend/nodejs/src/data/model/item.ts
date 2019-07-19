import { Document, Schema, model } from 'mongoose';

export interface IItem extends Document {
  name: string;
  description?: string;
}

export const ItemSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

export default model<IItem>('Item', ItemSchema);
