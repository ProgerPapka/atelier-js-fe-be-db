import { Document, Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  surname: string;
  middlename?: string;
  phone?: string;
  email: string;
  password: string;
  userRole: Schema.Types.ObjectId;
  userAddress: Schema.Types.ObjectId;
  favorite: Schema.Types.ObjectId;
  basket: Schema.Types.ObjectId;
  avatar: Schema.Types.ObjectId;
}

export interface IUserDocument extends IUser, Document {
}

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  middlename: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userRole: Schema.Types.ObjectId,
  userAddress: Schema.Types.ObjectId,
  favorite: Schema.Types.ObjectId,
  basket: Schema.Types.ObjectId,
  avatar: Schema.Types.ObjectId
});

export default model<IUserDocument>('User', UserSchema);
