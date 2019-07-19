import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  surname: string;
  middlename?: string;
  phone?: string;
  email: string;
  password: string;
  basketId: Schema.Types.ObjectId;
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
  basketId: Schema.Types.ObjectId
});

export default model<IUser>('User', UserSchema);
