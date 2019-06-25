package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.Item;
import com.dreamteam.atelier.model.domain.Top;
import com.dreamteam.atelier.model.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface TopRepository extends MongoRepository<Top, String> {

    Top findTopByIdAndUuid(String id, UUID uuid);

    Top findTopById(String id);

    Top findTopByUuid(UUID uuid);

    List<Top> findAllByItem(Item item);

    List<Top> findAllByUser(User user);

    List<Top> findAllByValue(Integer value);

    List<Top> findAllByItemAndUser(Item item, User user);

}
