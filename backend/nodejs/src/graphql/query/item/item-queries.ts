import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { map } from 'lodash';
import { IQueryFields } from '../../types/basic/query-fields';
import { ItemType } from '../../types/item';
import itemRepository from '../../../data/repository/item-repository';
import itemCategorRepository from '../../../data/repository/item-category-repository';
import itemTypeRepository from '../../../data/repository/item-type-repository';
import seasonRepository from '../../../data/repository/season-repository';

export const itemQueries: IQueryFields = {
    item: {
        type: ItemType,
        args: {id: {type: GraphQLID}},
        resolve: (source: any, {id}) => itemRepository.findById(id)
    },
    items: {
        type: new GraphQLList(ItemType),
        resolve: () => itemRepository.findAll()
    },
    itemsByCategory: {
        type: new GraphQLList(ItemType),
        args: {
            categoryId: {type: GraphQLID}
        },
        resolve: (source: any, {categoryId}) => {
            const category = itemCategorRepository.findById(categoryId).getQuery();
            const items = itemRepository.findByCategory(categoryId).getQuery();
            return map(items, (item) => ({...item, itemCategory: category}));
        }
    },
    itemsByType: {
        type: new GraphQLList(ItemType),
        args: {
            typeId: {type: GraphQLID}
        },
        resolve: (source: any, {typeId}) => {
            const type = itemTypeRepository.findById(typeId).getQuery();
            const items = itemRepository.findByType(typeId).getQuery();
            return map(items, (item) => ({...item, itemType: type}));
        }
    },
    itemsBySeason: {
        type: new GraphQLList(ItemType),
        args: {
            seasonId: {type: GraphQLID}
        },
        resolve: (source: any, {seasonId}) => {
            const season = seasonRepository.findById(seasonId).getQuery();
            const items = itemRepository.findBySeason(seasonId).getQuery();
            return map(items, (item) => ({...item, season}));
        }
    },
    itemsByLikeName: {
        type: new GraphQLList(ItemType),
        args: {
            name: {type: GraphQLString}
        },
        resolve: () => null // TODO: implement
    }
};
