package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.Favorite;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface FavoriteRepository extends MongoRepository<Favorite, String> {

    Favorite findFavoriteById(String id);

    Favorite findFavoriteByUuid(UUID uuid);

    Favorite findFavoriteByIdAndUuid(String id, UUID uuid);

}
