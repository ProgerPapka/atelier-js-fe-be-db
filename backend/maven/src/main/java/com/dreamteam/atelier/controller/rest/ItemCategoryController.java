package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.ItemCategory;
import com.dreamteam.atelier.model.local.ProductCategory;
import com.dreamteam.atelier.service.domain.ItemCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rest/itemCategory")
public class ItemCategoryController {

    private final ItemCategoryService itemCategoryService;

    @Autowired
    public ItemCategoryController(ItemCategoryService itemCategoryService) {
        this.itemCategoryService = itemCategoryService;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<List<ItemCategory>> getAllCategories() {
        return new ResponseEntity<>(itemCategoryService.getAllItemCategories(), HttpStatus.OK);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<ItemCategory> createCategory(@RequestBody ProductCategory itemCategory) {
        return new ResponseEntity<>(itemCategoryService.createItemCategory(itemCategory.getName(), itemCategory.getDescription()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteCategory(@RequestBody ProductCategory itemCategory) {
        itemCategoryService.deleteItemCategory(itemCategory.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

}
