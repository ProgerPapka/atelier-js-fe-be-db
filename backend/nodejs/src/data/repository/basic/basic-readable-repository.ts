import { Schema, DocumentQuery, Document } from 'mongoose';

export interface IBasicReadableRepository<T extends Document> {
    findById: (id: Schema.Types.ObjectId) => DocumentQuery<T, T>;
    findAll: () => DocumentQuery<Array<T>, T>;
}
