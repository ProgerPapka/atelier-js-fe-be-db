import { Document, Schema, model } from 'mongoose';

export interface IUserAddress {
    region: string;
    city: string;
    street: string;
    house: string;
    floor?: string;
    flat?: string;
    description?: string;
}

export interface IUserAddressDocument extends IUserAddress, Document {
}

export const UserAddressSchema = new Schema({
    region: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
    floor: {
        type: String
    },
    flat: {
        type: String
    },
    description: {
        type: String
    }
});

export default model<IUserAddressDocument>('UserAddress', UserAddressSchema);
