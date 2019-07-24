import { SeasonType } from '../../types/season';
import { GraphQLString, GraphQLID } from 'graphql';
import seasonRepository from '../../../data/repository/season-repository';
import { IMutationFields } from '../../types/basic/mutation-fields';

export const seasonMutations: IMutationFields = {
    createSeason: {
        type: SeasonType,
        args: {name: {type: GraphQLString}, description: {type: GraphQLString}},
        resolve: (source: any, {name, description}) =>
                    seasonRepository.save({name, description})
    },
    deleteSeason: {
        type: SeasonType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => seasonRepository.remove(id)
    }
};
