import { Document, Schema, model } from 'mongoose';

export interface IItemType {
    name: string;
    description?: string;
}

export interface IItemTypeDocument extends IItemType, Document {
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

export default model<IItemTypeDocument>('ItemType', ItemTypeSchema);
