import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import UserRole, { IUserRole } from '../model/user-role';

interface IUserRoleRepository extends IBasicReadableRepository<IUserRole>,
                                          IBasicModifiableRepository<IUserRole> {
    findByRole: (role: string) => IUserRole;
}

class UserRoleRepository implements IUserRoleRepository {

    public findById(id: Schema.Types.ObjectId): IUserRole {
        return null;
    }

    public findByRole(role: string): IUserRole {
        return null;
    }

    public findAll(): Array<IUserRole> {
        return null;
    }

    public save(userRole: IUserRole): Promise<IUserRole> {
        return new UserRole(userRole).save();
    }

    public remove(id: Schema.Types.ObjectId): IUserRole {
        return null;
    }
}

export default new UserRoleRepository();
