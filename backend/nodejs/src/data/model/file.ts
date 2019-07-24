import { Document, Schema, model } from 'mongoose';
import { link } from 'fs';

export interface IFile {
    name: string;
    link?: string;
}

export interface IFileDocument extends IFile, Document {
}

export const FileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
});

export default model<IFileDocument>('File', FileSchema);
