package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.ItemCategory;
import com.dreamteam.atelier.repository.ItemCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ItemCategoryService {

    private final ItemCategoryRepository itemCategoryRepository;

    @Autowired
    public ItemCategoryService(ItemCategoryRepository itemCategoryRepository) {
        this.itemCategoryRepository = itemCategoryRepository;
    }

    public List<ItemCategory> getAllItemCategories() {
        return itemCategoryRepository.findAll();
    }

    public ItemCategory createItemCategory(String name, String description) {
        ItemCategory itemCategory = new ItemCategory();
        itemCategory.setUuid(UUID.randomUUID());
        itemCategory.setName(name);
        itemCategory.setDescription(description);
        return itemCategoryRepository.insert(itemCategory);
    }

    public void deleteItemCategory(String id) {
        ItemCategory itemCategoryById = itemCategoryRepository.findItemCategoryById(id);
        if (itemCategoryById != null) {
            itemCategoryRepository.delete(itemCategoryById);
        }
    }
}
