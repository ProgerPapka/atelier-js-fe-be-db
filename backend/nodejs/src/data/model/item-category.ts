import { Document, Schema, model } from 'mongoose';

export interface IItemCategory extends Document {
    name: string;
    description?: string;
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

export default model<IItemCategory>('ItemCategory', ItemCategorySchema);
