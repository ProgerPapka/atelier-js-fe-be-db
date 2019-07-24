import { UserRoleType } from '../../types/user-role';
import { GraphQLString, GraphQLID } from 'graphql';
import userRoleRepository from '../../../data/repository/user-role-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const userRoleMutations: IMutationFields = {
    createUserRole: {
        type: UserRoleType,
        args: {role: {type: GraphQLString}, description: {type: GraphQLString}},
        resolve: (source: any, {role, description}) =>
                    userRoleRepository.save({role, description})
    },
    deleteUserRole: {
        type: UserRoleType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => userRoleRepository.remove(id)
    }
};
