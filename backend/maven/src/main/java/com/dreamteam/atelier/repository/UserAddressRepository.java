package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.UserAddress;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface UserAddressRepository extends MongoRepository<UserAddress, String> {

    UserAddress findUserAddressByIdAndUuid(String id, UUID uuid);

    UserAddress findUserAddressById(String id);

    UserAddress findUserAddressByUuid(UUID uuid);

}
