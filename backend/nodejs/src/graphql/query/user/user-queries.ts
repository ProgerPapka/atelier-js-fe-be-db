import { map } from 'lodash';
import { IQueryFields } from './../../types/basic/query-fields';
import { UserType } from './../../types/user';
import { GraphQLList, GraphQLID } from 'graphql';
import userRepository from '../../../data/repository/user-repository';
import { prepareUser } from '../../../data/utils';

export const userQueries: IQueryFields = {
    users: {
        type: new GraphQLList(UserType),
        resolve: async () => {
            const users = await userRepository.findAll().then();
            return map(users, (user) => prepareUser(user));
        }
    },
    user: {
        type: new GraphQLList(UserType),
        args: {id: {type: GraphQLID}},
        resolve: async (source: any, {id}) => {
            const user = await userRepository.findById(id).then();
            return prepareUser(user);
        }
    }
};
