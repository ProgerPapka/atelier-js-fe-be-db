package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.ItemType;
import com.dreamteam.atelier.repository.ItemTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ItemTypeService {

    private final ItemTypeRepository itemTypeRepository;

    @Autowired
    public ItemTypeService(ItemTypeRepository itemTypeRepository) {
        this.itemTypeRepository = itemTypeRepository;
    }

    public List<ItemType> getAllItemTypes() {
        return itemTypeRepository.findAll();
    }

    public ItemType createItemType(String name, String description) {
        ItemType itemType = new ItemType();
        itemType.setUuid(UUID.randomUUID());
        itemType.setName(name);
        itemType.setDescription(description);
        return itemTypeRepository.insert(itemType);
    }

    public void deleteItemType(String id) {
        ItemType itemTypeById = itemTypeRepository.findItemTypeById(id);
        if (itemTypeById != null) {
            itemTypeRepository.delete(itemTypeById);
        }
    }

}
