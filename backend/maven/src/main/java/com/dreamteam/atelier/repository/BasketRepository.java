package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.Basket;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface BasketRepository extends MongoRepository<Basket, String> {

    Basket findBasketByIdAndUuid(String id, UUID uuid);

    Basket findBasketById(String id);

    Basket findBasketByUuid(UUID uuid);

}
