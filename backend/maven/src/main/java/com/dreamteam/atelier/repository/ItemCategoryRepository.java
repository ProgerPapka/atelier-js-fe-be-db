package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.ItemCategory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ItemCategoryRepository extends MongoRepository<ItemCategory, String> {

    ItemCategory findItemCategoryById(String id);

    ItemCategory findItemCategoryByUuid(UUID uuid);

    ItemCategory findItemCategoryByIdAndUuid(String id, UUID uuid);

    ItemCategory findItemCategoryByName(String name);

}
