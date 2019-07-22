import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import UserAddress, { IUserAddress } from '../model/user-address';

interface IUserAddressRepository extends IBasicReadableRepository<IUserAddress>,
                                          IBasicModifiableRepository<IUserAddress> {
}

class UserAddressRepository implements IUserAddressRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IUserAddress, IUserAddress> {
        return UserAddress.findById(id);
    }

    public findAll(): DocumentQuery<Array<IUserAddress>, IUserAddress>{
        return UserAddress.find();
    }

    public save(userAddress: IUserAddress): Promise<IUserAddress> {
        return new UserAddress(userAddress).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IUserAddress, IUserAddress> {
        return UserAddress.findByIdAndDelete(id);
    }
}

export default new UserAddressRepository();
