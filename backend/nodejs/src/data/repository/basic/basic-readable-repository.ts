import { Schema, DocumentQuery, Document } from 'mongoose';

export interface IBasicReadableRepository<T, TDoc extends Document> {
    findById: (id: Schema.Types.ObjectId) => DocumentQuery<T, TDoc>;
    findAll: () => DocumentQuery<Array<T>, TDoc>;
}
