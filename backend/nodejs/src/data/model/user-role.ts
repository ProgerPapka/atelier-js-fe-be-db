import { Document, Schema, model } from 'mongoose';

export interface IUserRole {
    role: string;
    description?: string;
}

export interface IUserRoleDocument extends IUserRole, Document {
}

export const UserRoleSchema = new Schema({
    role: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }
});

export default model<IUserRoleDocument>('UserRole', UserRoleSchema);
