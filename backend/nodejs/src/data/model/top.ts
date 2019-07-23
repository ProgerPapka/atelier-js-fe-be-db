import { Document, Schema, model } from 'mongoose';

export interface ITop {
    value: number;
    item: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
}

export interface ITopDocument extends ITop, Document {
    value: number;
    item: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
}

export const TopSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    item: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId
});

export default model<ITopDocument>('Top', TopSchema);
