import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import User, { IUser } from '../model/user';

interface IUserRepository extends IBasicReadableRepository<IUser>,
                                          IBasicModifiableRepository<IUser> {
    findByName: (name: string) => IUser;
}

class UserRepository implements IUserRepository {

    public findById(id: Schema.Types.ObjectId): IUser {
        return null;
    }

    public findByName(name: string): IUser {
        return null;
    }

    public findAll(): Array<IUser> {
        return null;
    }

    public save(user: IUser): Promise<IUser> {
        return new User(user).save();
    }

    public remove(id: Schema.Types.ObjectId): IUser {
        return null;
    }
}

export default new UserRepository();
