import { IQueryFields } from './../../types/basic/query-fields';
import { UserType } from './../../types/user';
import { GraphQLList, GraphQLID } from 'graphql';
import userRepository from '../../../data/repository/user-repository';
import { IUser } from '../../../data/model';

export const userQuyries: IQueryFields = {
    users: {
        type: new GraphQLList(UserType),
        resolve: () => userRepository.findAll(), // TODO: implement
    },
    user: {
        type: new GraphQLList(UserType),
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => userRepository.findById(id), // TODO: implement
    }
};
