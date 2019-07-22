import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import UserRole, { IUserRole } from '../model/user-role';

interface IUserRoleRepository extends IBasicReadableRepository<IUserRole>,
                                          IBasicModifiableRepository<IUserRole> {
    findByRole: (role: string) => DocumentQuery<IUserRole, IUserRole>;
}

class UserRoleRepository implements IUserRoleRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IUserRole, IUserRole> {
        return UserRole.findById(id);
    }

    public findByRole(role: string): DocumentQuery<IUserRole, IUserRole> {
        return UserRole.findOne({role});
    }

    public findAll(): DocumentQuery<Array<IUserRole>, IUserRole> {
        return UserRole.find();
    }

    public save(userRole: IUserRole): Promise<IUserRole> {
        return new UserRole(userRole).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IUserRole, IUserRole> {
        return UserRole.findByIdAndDelete(id);
    }
}

export default new UserRoleRepository();
