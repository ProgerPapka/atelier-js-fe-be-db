import { IUserAddressDocument } from './../model/user-address';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import UserAddress, { IUserAddress } from '../model/user-address';

interface IUserAddressRepository extends IBasicReadableRepository<IUserAddress, IUserAddressDocument>,
                                          IBasicModifiableRepository<IUserAddress, IUserAddressDocument> {
}

class UserAddressRepository implements IUserAddressRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IUserAddress, IUserAddressDocument> {
        return UserAddress.findById(id);
    }

    public findAll(): DocumentQuery<Array<IUserAddress>, IUserAddressDocument> {
        return UserAddress.find();
    }

    public save(userAddress: IUserAddress): Promise<IUserAddressDocument> {
        return new UserAddress(userAddress).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IUserAddress, IUserAddressDocument> {
        return UserAddress.findByIdAndDelete(id);
    }
}

export default new UserAddressRepository();
