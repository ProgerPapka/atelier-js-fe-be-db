import { Document, Schema, model } from 'mongoose';
import { link } from 'fs';
import { Stream } from 'stream';

export interface IFile extends Document {
    name: string;
    link?: string;
    bytes?: ArrayBuffer;
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

export default model<IFile>('File', FileSchema);
