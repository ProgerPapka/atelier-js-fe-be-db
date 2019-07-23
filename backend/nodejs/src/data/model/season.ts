import { Document, Schema, model } from 'mongoose';

export interface ISeason {
    name: string;
    description?: string;
}

export interface ISeasonDocument extends ISeason, Document {
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

export default model<ISeasonDocument>('Season', SeasonSchema);
