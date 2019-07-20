import { Document, Schema, model } from 'mongoose';

export interface ITop extends Document {
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

export default model<ITop>('Top', TopSchema);
