import { IQueryFields } from './../../types/basic/query-fields';
import { SeasonType } from './../../types/season';
import { GraphQLList } from 'graphql';
import seasonRepository from '../../../data/repository/season-repository';

export const seasonQuyries: IQueryFields = {
    seasons: {
        type: GraphQLList(SeasonType),
        resolve: () => seasonRepository.findAll(),
    }
};
