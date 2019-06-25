package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.CommonFile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface CommonFileRepository extends MongoRepository<CommonFile, String> {

    CommonFile findCommonFileById(String id);

    CommonFile findCommonFileByUuid(UUID uuid);

    CommonFile findCommonFileByIdAndUuid(String id, UUID uuid);

    List<CommonFile> findCommonFileByName(String name);

}
