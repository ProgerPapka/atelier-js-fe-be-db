import { UserType } from '../../types/user';
import { GraphQLString, GraphQLID } from 'graphql';
import userRepository from '../../../data/repository/user-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const userMutations: IMutationFields = {
    createUser: {
        type: UserType,
        args: {
            name: {type: GraphQLString},
            surname: {type: GraphQLString},
            middlename: {type: GraphQLString},
            phone: {type: GraphQLString},
            email: {type: GraphQLString},
            password: {type: GraphQLString},
            userRole: {type: GraphQLID},
            userAddress: {type: GraphQLID},
            avatar: {type: GraphQLID}
        },
        resolve: (source: any, {
            name,
            surname,
            middlename,
            phone,
            email,
            password,
            userRole,
            userAddress,
            avatar
        }) => userRepository.save({
            name,
            surname,
            middlename,
            phone,
            email,
            password,
            userRole,
            userAddress,
            avatar
        }) // TODO: implement
    },
    deleteUser: {
        type: UserType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => userRepository.remove(id)
    }
};
