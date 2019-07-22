import { Document, Schema, model } from 'mongoose';

export interface IUserRole extends Document {
    role: string;
    description?: string;
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

export default model<IUserRole>('UserRole', UserRoleSchema);
