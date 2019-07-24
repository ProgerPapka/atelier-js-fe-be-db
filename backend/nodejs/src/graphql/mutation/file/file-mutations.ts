import { FileType } from '../../types/file';
import { GraphQLString, GraphQLID } from 'graphql';
import fileRepository from '../../../data/repository/file-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const fileMutations: IMutationFields = {
    createFile: {
        type: FileType,
        args: {name: {type: GraphQLString}, link: {type: GraphQLString}},
        resolve: (source: any, {name, link}) =>
                    fileRepository.save({name, link})
    },
    deleteFile: {
        type: FileType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => fileRepository.remove(id)
    }
};
