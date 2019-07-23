import { IUserRoleDocument } from './../model/user-role';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import UserRole, { IUserRole } from '../model/user-role';

interface IUserRoleRepository extends IBasicReadableRepository<IUserRole, IUserRoleDocument>,
                                          IBasicModifiableRepository<IUserRole, IUserRoleDocument> {
    findByRole: (role: string) => DocumentQuery<IUserRole, IUserRoleDocument>;
}

class UserRoleRepository implements IUserRoleRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IUserRole, IUserRoleDocument> {
        return UserRole.findById(id);
    }

    public findByRole(role: string): DocumentQuery<IUserRole, IUserRoleDocument> {
        return UserRole.findOne({role});
    }

    public findAll(): DocumentQuery<Array<IUserRole>, IUserRoleDocument> {
        return UserRole.find();
    }

    public save(userRole: IUserRole): Promise<IUserRole> {
        return new UserRole(userRole).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IUserRole, IUserRoleDocument> {
        return UserRole.findByIdAndDelete(id);
    }
}

export default new UserRoleRepository();
