import { Document, Schema, model } from 'mongoose';

export interface ISeason extends Document {
    name: string;
    description?: string;
}

export const SeasonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default model<ISeason>('Season', SeasonSchema);
