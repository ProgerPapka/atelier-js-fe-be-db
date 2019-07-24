import { UserAddressType } from '../../types/user-address';
import { GraphQLString, GraphQLID } from 'graphql';
import userAddressRepository from '../../../data/repository/user-address-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const userAddressMutations: IMutationFields = {
    createUserAddress: {
        type: UserAddressType,
        args: {
            region: {type: GraphQLString},
            city: {type: GraphQLString},
            street: {type: GraphQLString},
            house: {type: GraphQLString},
            floor: {type: GraphQLString},
            flat: {type: GraphQLString},
            description: {type: GraphQLString}
        },
        resolve: (source: any, {
            region,
            city,
            street,
            house,
            floor,
            flat,
            description
        }) => userAddressRepository.save({
            region,
            city,
            street,
            house,
            floor,
            flat,
            description
        })
    },
    deleteUserAddress: {
        type: UserAddressType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => userAddressRepository.remove(id)
    }
};
