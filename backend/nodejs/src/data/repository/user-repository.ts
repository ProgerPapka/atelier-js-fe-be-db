import { IUserDocument } from './../model/user';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import User, { IUser } from '../model/user';

interface IUserRepository extends IBasicReadableRepository<IUser, IUserDocument>,
                                          IBasicModifiableRepository<IUser, IUserDocument> {
    findByName: (name: string) => DocumentQuery<Array<IUser>, IUserDocument>;
}

class UserRepository implements IUserRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IUser, IUserDocument> {
        return User.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IUser>, IUserDocument> {
        return User.find({name});
    }

    public findAll(): DocumentQuery<Array<IUser>, IUserDocument> {
        return User.find();
    }

    public save(user: IUser): Promise<IUser> {
        return new User(user).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IUser, IUserDocument> {
        return User.findByIdAndDelete(id);
    }
}

export default new UserRepository();
