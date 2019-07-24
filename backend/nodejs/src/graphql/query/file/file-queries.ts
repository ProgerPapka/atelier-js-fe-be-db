import { IQueryFields } from '../../types/basic/query-fields';
import { FileType } from '../../types/file';
import { GraphQLID, GraphQLList } from 'graphql';
import fileRepository from '../../../data/repository/file-repository';

export const fileQueries: IQueryFields = {
    file: {
        type: FileType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => fileRepository.findById(id)
    },
    files: {
        type: new GraphQLList(FileType),
        resolve: () => fileRepository.findAll()
    }
};
