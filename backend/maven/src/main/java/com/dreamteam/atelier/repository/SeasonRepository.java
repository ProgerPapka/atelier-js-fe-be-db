package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.Season;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface SeasonRepository extends MongoRepository<Season, String> {

    Season findSeasonById(String id);

    Season findSeasonByUuid(UUID uuid);

    Season findSeasonByIdAndUuid(String id, UUID uuid);

    Season findSeasonByName(String name);

}
