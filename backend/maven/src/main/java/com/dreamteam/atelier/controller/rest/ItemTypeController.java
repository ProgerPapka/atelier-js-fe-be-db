package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.ItemType;
import com.dreamteam.atelier.model.local.ProductType;
import com.dreamteam.atelier.service.domain.ItemTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rest/itemType")
public class ItemTypeController {

    private final ItemTypeService itemTypeService;

    @Autowired
    public ItemTypeController(ItemTypeService itemTypeService) {
        this.itemTypeService = itemTypeService;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<List<ItemType>> getAllCategories() {
        return new ResponseEntity<>(itemTypeService.getAllItemTypes(), HttpStatus.OK);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<ItemType> createType(@RequestBody ProductType itemType) {
        return new ResponseEntity<>(itemTypeService.createItemType(itemType.getName(), itemType.getDescription()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteType(@RequestBody ProductType itemType) {
        itemTypeService.deleteItemType(itemType.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
    
}
