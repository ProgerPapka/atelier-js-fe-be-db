import { SeasonType } from '../../types/season';
import { GraphQLString } from 'graphql';
import seasonRepository from '../../../data/repository/season-repository';

export const seasonMutations = {
    createSeason: {
        type: SeasonType,
        args: {name: {type: GraphQLString}, description: {type: GraphQLString}},
        resolve: (source: any, {name, description}: {name: string, description: string}) =>
                    seasonRepository.save({name, description})
    }
};
