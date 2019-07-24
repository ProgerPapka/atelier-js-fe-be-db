import { IQueryFields } from '../../types/basic/query-fields';
import { UserRoleType } from '../../types/user-role';
import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import userRoleRepository from '../../../data/repository/user-role-repository';

export const userRoleQueries: IQueryFields = {
    userRole: {
        type: UserRoleType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => userRoleRepository.findById(id)
    },
    userRoleByName: {
        type: UserRoleType,
        args: {name: {type: GraphQLString}},
        resolve: (source: any, {name}) => userRoleRepository.findByRole(name)
    },
    usersRolees: {
        type: new GraphQLList(UserRoleType),
        resolve: () => userRoleRepository.findAll()
    }
};
