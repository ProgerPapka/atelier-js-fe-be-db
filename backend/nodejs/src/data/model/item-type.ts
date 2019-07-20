import { Document, Schema, model } from 'mongoose';

export interface IItemType extends Document {
    name: string;
    description?: string;
}

export const ItemTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default model<IItemType>('ItemType', ItemTypeSchema);
