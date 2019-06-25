package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.ItemType;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ItemTypeRepository extends MongoRepository<ItemType, String> {

    ItemType findItemTypeById(String id);

    ItemType findItemTypeByUuid(UUID uuid);

    ItemType findItemTypeByIdAndUuid(String id, UUID uuid);

    ItemType findItemTypeByName(String name);

}
