import { Document, Schema, model } from 'mongoose';

export interface IUserAddress extends Document {
    region: string;
    city: string;
    street: string;
    house: string;
    floor?: string;
    flat?: string;
    description?: string;
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

export default model<IUserAddress>('UserAddress', UserAddressSchema);
