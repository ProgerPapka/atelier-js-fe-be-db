package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.Basket;
import com.dreamteam.atelier.model.local.UserBasket;
import com.dreamteam.atelier.service.domain.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rest/basket")
public class BasketController {

    private final BasketService basketService;

    @Autowired
    public BasketController(BasketService basketService) {
        this.basketService = basketService;
    }

    /**
     * /api/rest/basket/getAll GET
     * Получение всех корзин которые существуют
     *
     * @return json array baskets
     */
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<List<Basket>> getAllBaskets() {
        return new ResponseEntity<>(basketService.getAllBaskets(), HttpStatus.OK);
    }

    /**
     * /api/rest/basket/create GET
     * Создание корзины
     *
     * @return json basket
     */
    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public ResponseEntity<Basket> createBasket() {
        return new ResponseEntity<>(basketService.createBasket(), HttpStatus.OK);
    }

    /**
     * /api/rest/basket/getById POST
     * Получение корзины по id
     *
     * @return json basket
     */
    @RequestMapping(value = "/getById", method = RequestMethod.POST)
    public ResponseEntity<Basket> getBasketById(@RequestBody UserBasket userBasket) {
        return new ResponseEntity<>(basketService.getBasket(userBasket.getId()), HttpStatus.OK);
    }

    /**
     * /api/rest/basket/getByUuid POST
     * Получение корзины по uuid
     *
     * @return json basket
     */
    @RequestMapping(value = "/getByUuid", method = RequestMethod.POST)
    public ResponseEntity<Basket> getBasketByUuid(@RequestBody UserBasket userBasket) {
        return new ResponseEntity<>(basketService.getBasket(userBasket.getUuid()), HttpStatus.OK);
    }

    /**
     * /api/rest/basket/getByIdAndUuid POST
     * Получение корзины по uuid и id
     *
     * @return json basket
     */
    @RequestMapping(value = "/getByIdAndUuid", method = RequestMethod.POST)
    public ResponseEntity<Basket> getBasketByIdAndUuid(@RequestBody UserBasket userBasket) {
        return new ResponseEntity<>(basketService.getBasket(userBasket.getId(), userBasket.getUuid()), HttpStatus.OK);
    }

    /**
     * /api/rest/basket/addItem POST
     * Добавление товара в корзину
     *
     * @return json boolean success
     */
    @RequestMapping(value = "/addItem", method = RequestMethod.POST)
    public ResponseEntity<Boolean> addItemToBasket(@RequestBody UserBasket userBasket) {
        basketService.addItem(userBasket.getId(), userBasket.getItemId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    /**
     * /api/rest/basket/deleteItem POST
     * Удаление товара из корзины
     *
     * @return json boolean success
     */
    @RequestMapping(value = "/deleteItem", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteItemFromBasket(@RequestBody UserBasket userBasket) {
        basketService.deleteItem(userBasket.getId(), userBasket.getItemId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    /**
     * /api/rest/basket/deleteAllItemsById DELETE
     * Удаление всех товаров с корзины по id корзины
     *
     * @return json boolean success
     */
    @RequestMapping(value = "/deleteAllItemsById", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteAllItemsFromBasketById(@RequestBody UserBasket userBasket) {
        basketService.deleteItemsFromBasket(userBasket.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    /**
     * /api/rest/basket/deleteAllItemsByUuid DELETE
     * Удаление всех товаров с корзины по id корзины
     *
     * @return json boolean success
     */
    @RequestMapping(value = "/deleteAllItemsByUuid", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteAllItemsFromBasketByUuid(@RequestBody UserBasket userBasket) {
        basketService.deleteItemsFromBasket(userBasket.getUuid());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    /**
     * /api/rest/basket/deleteById DELETE
     * Удаление карзины с бд по id карзины. Применять только в случае удаления страницы пользователя
     *
     * @return json boolean success
     */
    @RequestMapping(value = "/deleteById", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteById(@RequestBody UserBasket userBasket) {
        basketService.deleteBasketById(userBasket.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    /**
     * /api/rest/basket/deleteByUuid DELETE
     * Удаление карзины с бд по uuid карзины. Применять только в случае удаления страницы пользователя
     *
     * @return json boolean success
     */
    @RequestMapping(value = "/deleteByUuid", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteByUuid(@RequestBody UserBasket userBasket) {
        basketService.deleteBasketByUuid(userBasket.getUuid());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

}
