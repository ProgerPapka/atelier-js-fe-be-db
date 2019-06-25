package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.Basket;
import com.dreamteam.atelier.model.domain.Item;
import com.dreamteam.atelier.repository.BasketRepository;
import com.dreamteam.atelier.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class BasketService {

    private final BasketRepository basketRepository;
    private final ItemRepository itemRepository;

    @Autowired
    public BasketService(BasketRepository basketRepository, ItemRepository itemRepository) {
        this.basketRepository = basketRepository;
        this.itemRepository = itemRepository;
    }

    public Basket createBasket(){
        Basket basket = new Basket();
        basket.setUuid(UUID.randomUUID());
        return basketRepository.save(basket);
    }

    public Basket getBasket(String id){
        return basketRepository.findBasketById(id);
    }

    public Basket getBasket(String id, UUID uuid){
        return basketRepository.findBasketByIdAndUuid(id, uuid);
    }

    public Basket getBasket(UUID uuid){
        return basketRepository.findBasketByUuid(uuid);
    }

    public List<Basket> getAllBaskets(){
        return basketRepository.findAll();
    }

    public void deleteItemsFromBasket(String id){
        Basket basket = basketRepository.findBasketById(id);
        basket.setItems(Collections.emptyList());
        basketRepository.save(basket);
    }

    public void deleteItemsFromBasket(UUID uuid){
        Basket basket = basketRepository.findBasketByUuid(uuid);
        basket.setItems(Collections.emptyList());
        basketRepository.save(basket);
    }

    public void deleteBasketById(String id){
        Basket basket = basketRepository.findBasketById(id);
        basketRepository.delete(basket);
    }

    public void deleteBasketByUuid(UUID uuid){
        Basket basket = basketRepository.findBasketByUuid(uuid);
        basketRepository.delete(basket);
    }

    public void addItem(String basketId, String itemId){
        Basket basketById = basketRepository.findBasketById(basketId);
        Item itemById = itemRepository.findItemById(itemId);
        basketById.addItem(itemById);
        basketRepository.save(basketById);
    }

    public void deleteItem(String basketId, String itemId){
        Basket basketById = basketRepository.findBasketById(basketId);
        Item itemById = itemRepository.findItemById(itemId);
        basketById.removeItem(itemById);
        basketRepository.save(basketById);
    }

}
