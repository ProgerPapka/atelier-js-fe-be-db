import { Document, Schema, model } from 'mongoose';

export interface IItemCategory {
    name: string;
    description?: string;
}

export interface IItemCategoryDocument extends IItemCategory, Document {
}

export const ItemCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default model<IItemCategoryDocument>('ItemCategory', ItemCategorySchema);
