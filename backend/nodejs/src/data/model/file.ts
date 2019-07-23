import { Document, Schema, model } from 'mongoose';
import { link } from 'fs';
import { Stream } from 'stream';

export interface IFile {
    name: string;
    link?: string;
    bytes?: ArrayBuffer;
}

export interface IFileDocument extends IFile, Document {
}

export const FileSchema = new Schema({
    name: {
        type: Stream,
        required: true
    },
    link: {
        type: String
    },
    bytes: {
        type: ArrayBuffer
    }
});

export default model<IFileDocument>('File', FileSchema);
