import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema } from 'mongoose';
import UserAddress, { IUserAddress } from '../model/user-address';

interface IUserAddressRepository extends IBasicReadableRepository<IUserAddress>,
                                          IBasicModifiableRepository<IUserAddress> {
}

class UserAddressRepository implements IUserAddressRepository {

    public findById(id: Schema.Types.ObjectId): IUserAddress {
        return null;
    }

    public findAll(): Array<IUserAddress> {
        return null;
    }

    public save(userAddress: IUserAddress): Promise<IUserAddress> {
        return new UserAddress(userAddress).save();
    }

    public remove(id: Schema.Types.ObjectId): IUserAddress {
        return null;
    }
}

export default new UserAddressRepository();
