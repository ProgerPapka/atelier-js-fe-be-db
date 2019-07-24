import { IQueryFields } from './../../types/basic/query-fields';
import { SeasonType } from './../../types/season';
import { GraphQLList, GraphQLID } from 'graphql';
import seasonRepository from '../../../data/repository/season-repository';

export const seasonQueries: IQueryFields = {
    seasons: {
        type: new GraphQLList(SeasonType),
        resolve: () => seasonRepository.findAll(),
    },
    season: {
        type: new GraphQLList(SeasonType),
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => seasonRepository.findById(id),
    }
};
