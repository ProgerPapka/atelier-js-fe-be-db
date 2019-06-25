package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.Item;
import com.dreamteam.atelier.model.domain.ItemCategory;
import com.dreamteam.atelier.model.domain.ItemType;
import com.dreamteam.atelier.model.domain.Season;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface ItemRepository extends MongoRepository<Item, String> {

    Item findItemByIdAndUuid(String id, UUID uuid);

    Item findItemById(String id);

    Item findItemByUuid(UUID uuid);

    List<Item> findItemByName(String name);

    List<Item> findItemByDimensionsContains(List<String> dimensions);

    List<Item> findItemBySale(Integer sale);

    List<Item> findItemBySaleBetween(Integer sale, Integer sale2);

    List<Item> findItemByPriceBetween(Double price, Double price2);

    List<Item> findItemByItemCategory(List<ItemCategory> itemCategory);

    List<Item> findItemByItemCategoryContains(List<ItemCategory> itemCategory);

    List<Item> findItemByItemType(List<ItemType> itemType);

    List<Item> findItemByItemTypeContains(List<ItemType> itemType);

    List<Item> findItemBySeason(Season season);

}
