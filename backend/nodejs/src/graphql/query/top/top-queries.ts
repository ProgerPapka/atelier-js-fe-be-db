import { IQueryFields } from '../../types/basic/query-fields';
import { TopType } from '../../types/top';
import { GraphQLID, GraphQLList } from 'graphql';
import topRepository from '../../../data/repository/top-repository';

export const topQueries: IQueryFields = {
    top: {
        type: TopType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => topRepository.findById(id)
    },
    tops: {
        type: new GraphQLList(TopType),
        resolve: () => topRepository.findAll()
    },
    topsByItem: {
        type: new GraphQLList(TopType),
        args: {
            itemId: {type: GraphQLID}
        },
        resolve: (source: any, {itemId}) => topRepository.findByItem(itemId)
    }
};
