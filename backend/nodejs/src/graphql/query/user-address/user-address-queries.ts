import { IQueryFields } from '../../types/basic/query-fields';
import { UserAddressType } from '../../types/user-address';
import { GraphQLID, GraphQLList } from 'graphql';
import userAddressRepository from '../../../data/repository/user-address-repository';

export const userAddressQueries: IQueryFields = {
    userAddress: {
        type: UserAddressType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => userAddressRepository.findById(id)
    },
    usersAddresses: {
        type: new GraphQLList(UserAddressType),
        resolve: () => userAddressRepository.findAll()
    }
};
