import { Schema } from 'mongoose';

import { DocumentQuery, Document } from 'mongoose';

export interface IBasicModifiableRepository<T extends Document> {
    save: (model: T) => Promise<T>;
    remove: (id: Schema.Types.ObjectId) => DocumentQuery<T, T>;
}
