package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.*;
import com.dreamteam.atelier.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ItemService {

    private final ItemRepository itemRepository;
    private final CommonFileRepository commonFileRepository;
    private final ItemCategoryRepository itemCategoryRepository;
    private final ItemTypeRepository itemTypeRepository;
    private final SeasonRepository seasonRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository, CommonFileRepository commonFileRepository,
                       ItemCategoryRepository itemCategoryRepository,
                       ItemTypeRepository itemTypeRepository, SeasonRepository seasonRepository) {
        this.itemRepository = itemRepository;
        this.commonFileRepository = commonFileRepository;
        this.itemCategoryRepository = itemCategoryRepository;
        this.itemTypeRepository = itemTypeRepository;
        this.seasonRepository = seasonRepository;
    }

    public Item createItem(String name, String description, Double price, Integer sale,
                           List<String> filesId, List<String> dimensionsId, List<String> categoriesId,
                           List<String> typesId, String seasonId) {
        Item item = new Item();
        item.setUuid(UUID.randomUUID());
        item.setName(name);
        item.setDescription(description);
        filesId.forEach(file -> {
            CommonFile commonFileById = commonFileRepository.findCommonFileById(file);
            if (commonFileById != null) {
                item.addCommonFile(commonFileById);
            }
        });
        dimensionsId.forEach(item::addDimensions);
        item.setPrice(price);
        item.setCreateDate(LocalDateTime.now());
        item.setSale(sale);
        categoriesId.forEach(categoryId -> {
            ItemCategory category = itemCategoryRepository.findItemCategoryById(categoryId);
            if (category != null) {
                item.addItemCategory(category);
            }
        });
        typesId.forEach(typeId -> {
            ItemType type = itemTypeRepository.findItemTypeById(typeId);
            if (type != null) {
                item.addItemType(type);
            }
        });
        Season seasonById = seasonRepository.findSeasonById(seasonId);
        if (seasonById != null) {
            item.setSeason(seasonById);
        }
        return itemRepository.insert(item);
    }

    public Item updateDimensionsItem(String id, List<String> dimensionsId) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setDimensions(new ArrayList<>());
        dimensionsId.forEach(itemById::addDimensions);
        return itemRepository.save(itemById);
    }

    public Item addDimensionsItem(String id, List<String> dimensionsId) {
        Item itemById = itemRepository.findItemById(id);
        dimensionsId.forEach(itemById::addDimensions);
        return itemRepository.save(itemById);
    }

    public Item removeDimensionsItem(String id, List<String> dimensionsId) {
        Item itemById = itemRepository.findItemById(id);
        dimensionsId.forEach(itemById::removeDimensions);
        return itemRepository.save(itemById);
    }

    public Item updatePriceItem(String id, Double price) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setPrice(price);
        return itemRepository.save(itemById);
    }

    public Item updateNameItem(String id, String naem) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setName(naem);
        return itemRepository.save(itemById);
    }

    public Item updateDescriptionItem(String id, String description) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setDescription(description);
        return itemRepository.save(itemById);
    }

    public Item updateFilesItem(String id, List<String> files) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setCommonFiles(new ArrayList<>());
        files.forEach(file -> {
            CommonFile commonFileById = commonFileRepository.findCommonFileById(file);
            if (commonFileById != null) {
                itemById.addCommonFile(commonFileById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item addFilesItem(String id, List<String> files) {
        Item itemById = itemRepository.findItemById(id);
        files.forEach(file -> {
            CommonFile commonFileById = commonFileRepository.findCommonFileById(file);
            if (commonFileById != null) {
                itemById.addCommonFile(commonFileById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item removeFilesItem(String id, List<String> files) {
        Item itemById = itemRepository.findItemById(id);
        files.forEach(file -> {
            CommonFile commonFileById = commonFileRepository.findCommonFileById(file);
            if (commonFileById != null) {
                itemById.removeCommonFile(commonFileById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item updateSaleItem(String id, Integer sale) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setSale(sale);
        return itemRepository.save(itemById);
    }

    public Item updateCategoriesItem(String id, List<String> categories) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setItemCategory(new ArrayList<>());
        categories.forEach(data -> {
            ItemCategory itemCategoryById = itemCategoryRepository.findItemCategoryById(data);
            if (itemCategoryById != null) {
                itemById.addItemCategory(itemCategoryById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item addCategoriesItem(String id, List<String> categories) {
        Item itemById = itemRepository.findItemById(id);
        categories.forEach(data -> {
            ItemCategory itemCategoryById = itemCategoryRepository.findItemCategoryById(data);
            if (itemCategoryById != null) {
                itemById.addItemCategory(itemCategoryById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item removeCategoriesItem(String id, List<String> categories) {
        Item itemById = itemRepository.findItemById(id);
        categories.forEach(data -> {
            ItemCategory itemCategoryById = itemCategoryRepository.findItemCategoryById(data);
            if (itemCategoryById != null) {
                itemById.removeItemCategory(itemCategoryById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item updateTypesItem(String id, List<String> types) {
        Item itemById = itemRepository.findItemById(id);
        itemById.setItemType(new ArrayList<>());
        types.forEach(data -> {
            ItemType itemTypeById = itemTypeRepository.findItemTypeById(data);
            if (itemTypeById != null) {
                itemById.addItemType(itemTypeById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item addTypesItem(String id, List<String> types) {
        Item itemById = itemRepository.findItemById(id);
        types.forEach(data -> {
            ItemType itemTypeById = itemTypeRepository.findItemTypeById(data);
            if (itemTypeById != null) {
                itemById.addItemType(itemTypeById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item removeTypesItem(String id, List<String> types) {
        Item itemById = itemRepository.findItemById(id);
        types.forEach(data -> {
            ItemType itemTypeById = itemTypeRepository.findItemTypeById(data);
            if (itemTypeById != null) {
                itemById.removeItemType(itemTypeById);
            }
        });
        return itemRepository.save(itemById);
    }

    public Item updateSeasonItem(String id, String sesonId) {
        Item itemById = itemRepository.findItemById(id);
        Season seasonById = seasonRepository.findSeasonById(sesonId);
        itemById.setSeason(seasonById);
        return itemRepository.save(itemById);
    }

    public void deleteItem(String id) {
        Item itemById = itemRepository.findItemById(id);
        itemRepository.delete(itemById);
    }

    public List<Item> getAllItems(){
        return itemRepository.findAll();
    }

    public Item getItemById(String id) {
        return itemRepository.findItemById(id);
    }

    public Item getItemByUuid(UUID uuid) {
        return itemRepository.findItemByUuid(uuid);
    }

    public List<Item> getItemsByTypes(List<String> types) {
        List<ItemType> collect = types.stream()
                .map(itemTypeRepository::findItemTypeById).collect(Collectors.toList());
        return itemRepository.findItemByItemTypeContains(collect);
    }

    public List<Item> getItemsByCategories(List<String> categories) {
        List<ItemCategory> collect = categories.stream()
                .map(itemCategoryRepository::findItemCategoryById).collect(Collectors.toList());
        return itemRepository.findItemByItemCategoryContains(collect);
    }

    public List<Item> getItemsBySeasons(String seasonId) {
        Season seasonById = seasonRepository.findSeasonById(seasonId);
        if (seasonById != null) {
            return itemRepository.findItemBySeason(seasonById);
        }
        return Collections.emptyList();
    }

    public List<Item> getItemsByDimensions(List<String> dimensions) {
        return itemRepository.findItemByDimensionsContains(dimensions);
    }

    public List<Item> getItemsBetweenPrices(Double minPrice, Double maxPrice) {
        return itemRepository.findItemByPriceBetween(minPrice, maxPrice);
    }

    public List<Item> getItemsBetweenSale(Integer minSale, Integer maxSale) {
        return itemRepository.findItemBySaleBetween(minSale, maxSale);
    }
}
