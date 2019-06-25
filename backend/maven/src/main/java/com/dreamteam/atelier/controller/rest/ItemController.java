package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.CommonFile;
import com.dreamteam.atelier.model.domain.Item;
import com.dreamteam.atelier.model.domain.ItemCategory;
import com.dreamteam.atelier.model.domain.ItemType;
import com.dreamteam.atelier.model.local.Product;
import com.dreamteam.atelier.service.domain.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/rest/item/")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> getAllItems() {
        return new ResponseEntity<>(
                itemService.getAllItems().stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Product> createItem(@RequestBody Product product) {
        Item item = itemService.createItem(product.getName(), product.getDescription(),
                product.getPrice(), product.getSale(), product.getCommonFilesId(),
                product.getDimensions(), product.getItemCategoryId(),
                product.getItemTypeId(), product.getSeasonId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/getById", method = RequestMethod.POST)
    public ResponseEntity<Product> getItemById(@RequestBody Product product) {
        Item item = itemService.getItemById(product.getId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/getByUuid", method = RequestMethod.POST)
    public ResponseEntity<Product> getItemByUuid(@RequestBody Product product) {
        Item item = itemService.getItemByUuid(product.getUuid());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/getByTypes", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> getItemsByTypes(@RequestBody Product product) {
        List<Item> itemsByTypes = itemService.getItemsByTypes(product.getItemTypeId());
        return new ResponseEntity<>(
                itemsByTypes.stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/getByCategories", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> getItemsByCategories(@RequestBody Product product) {
        List<Item> itemsByCategories = itemService.getItemsByCategories(product.getItemCategoryId());
        return new ResponseEntity<>(
                itemsByCategories.stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/getBySeasons", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> getItemsBySeasons(@RequestBody Product product) {
        List<Item> list = itemService.getItemsBySeasons(product.getSeasonId());
        return new ResponseEntity<>(
                list.stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/getByDimensions", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> getItemsByDimensions(@RequestBody Product product) {
        List<Item> list = itemService.getItemsByDimensions(product.getDimensions());
        return new ResponseEntity<>(
                list.stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/getBetweenPrices", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> getItemsBetweenPrices(@RequestBody Product product) {
        List<Item> list = itemService.getItemsBetweenPrices(product.getMinPrice(), product.getMaxPrice());
        return new ResponseEntity<>(
                list.stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/getBetweenSate", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> getItemsBetweenSale(@RequestBody Product product) {
        List<Item> list = itemService.getItemsBetweenSale(product.getMinSale(), product.getMaxSale());
        return new ResponseEntity<>(
                list.stream().map(this::createProduct).collect(Collectors.toList()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/updateDimensions", method = RequestMethod.POST)
    public ResponseEntity<Product> updateDimensionsItem(@RequestBody Product product) {
        Item item = itemService.updateDimensionsItem(product.getId(), product.getDimensions());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/addDimensions", method = RequestMethod.POST)
    public ResponseEntity<Product> addDimensionsItem(@RequestBody Product product) {
        Item item = itemService.addDimensionsItem(product.getId(), product.getDimensions());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/removeDimensions", method = RequestMethod.POST)
    public ResponseEntity<Product> removeDimensionsItem(@RequestBody Product product) {
        Item item = itemService.removeDimensionsItem(product.getId(), product.getDimensions());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updatePrice", method = RequestMethod.POST)
    public ResponseEntity<Product> updatePriceItem(@RequestBody Product product) {
        Item item = itemService.updatePriceItem(product.getId(), product.getPrice());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateName", method = RequestMethod.POST)
    public ResponseEntity<Product> updateNameItem(@RequestBody Product product) {
        Item item = itemService.updateNameItem(product.getId(), product.getName());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateDescription", method = RequestMethod.POST)
    public ResponseEntity<Product> updateDescriptionItem(@RequestBody Product product) {
        Item item = itemService.updateDescriptionItem(product.getId(), product.getDescription());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateFiles", method = RequestMethod.POST)
    public ResponseEntity<Product> updateFilesItem(@RequestBody Product product) {
        Item item = itemService.updateFilesItem(product.getId(), product.getCommonFilesId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/addFiles", method = RequestMethod.POST)
    public ResponseEntity<Product> addFilesItem(@RequestBody Product product) {
        Item item = itemService.addFilesItem(product.getId(), product.getCommonFilesId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/removeFiles", method = RequestMethod.POST)
    public ResponseEntity<Product> removeFilesItem(@RequestBody Product product) {
        Item item = itemService.removeFilesItem(product.getId(), product.getCommonFilesId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateSale", method = RequestMethod.POST)
    public ResponseEntity<Product> updateSaleItem(@RequestBody Product product) {
        Item item = itemService.updateSaleItem(product.getId(), product.getSale());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateCategories", method = RequestMethod.POST)
    public ResponseEntity<Product> updateCategoriesItem(@RequestBody Product product) {
        Item item = itemService.updateCategoriesItem(product.getId(), product.getItemCategoryId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/addCategories", method = RequestMethod.POST)
    public ResponseEntity<Product> addCategoriesItem(@RequestBody Product product) {
        Item item = itemService.addCategoriesItem(product.getId(), product.getItemCategoryId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/removeCategories", method = RequestMethod.POST)
    public ResponseEntity<Product> removeCategoriesItem(@RequestBody Product product) {
        Item item = itemService.removeCategoriesItem(product.getId(), product.getItemCategoryId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateTypes", method = RequestMethod.POST)
    public ResponseEntity<Product> updateTypesItem(@RequestBody Product product) {
        Item item = itemService.updateTypesItem(product.getId(), product.getItemTypeId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/addTypes", method = RequestMethod.POST)
    public ResponseEntity<Product> addTypesItem(@RequestBody Product product) {
        Item item = itemService.addTypesItem(product.getId(), product.getItemTypeId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/removeTypes", method = RequestMethod.POST)
    public ResponseEntity<Product> removeTypesItem(@RequestBody Product product) {
        Item item = itemService.removeTypesItem(product.getId(), product.getItemTypeId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/updateSeason", method = RequestMethod.POST)
    public ResponseEntity<Product> updateSeasonItem(@RequestBody Product product) {
        Item item = itemService.updateSeasonItem(product.getId(), product.getSeasonId());
        return new ResponseEntity<>(createProduct(item), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteItem(@RequestBody Product product) {
        itemService.deleteItem(product.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    private Product createProduct(Item item) {
        Product product = new Product();
        product.setId(item.getId());
        product.setUuid(item.getUuid());
        product.setName(item.getName());
        product.setDescription(item.getDescription());
        product.setCommonFilesId(item.getCommonFiles()
                .stream().map(CommonFile::getId).collect(Collectors.toList()));
        product.setDimensions(item.getDimensions());
        product.setPrice(item.getPrice());
        product.setCreateDate(item.getCreateDate());
        product.setSale(item.getSale());
        product.setItemCategoryId(item.getItemCategory()
                .stream().map(ItemCategory::getId).collect(Collectors.toList()));
        product.setItemTypeId(item.getItemType()
                .stream().map(ItemType::getId).collect(Collectors.toList()));
        product.setSeasonId(item.getSeason().getId());
        return product;
    }
}
