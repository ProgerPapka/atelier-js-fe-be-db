package com.dreamteam.atelier.repository;

import com.dreamteam.atelier.model.domain.User;
import com.dreamteam.atelier.model.domain.UserAddress;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends MongoRepository<User, String> {

    User findUserByIdAndUuid(String id, UUID uuid);

    User findUserById(String id);

    User findUserByUuid(UUID uuid);

    User findUserByEmail(String email);

    Optional<User> findUserByLogin(String login);

    User findUserByNikname(String nikname);

    User findUserByMobile(String mobile);

    User findUserByUserAddress(UserAddress userAddress);

    List<User> findUserByName(String name);

    List<User> findUserBySurname(String surname);

    List<User> findUserByMiddlename(String middlename);

    List<User> findUserByNameAndSurname(String name, String surname);

    List<User> findUserByNameAndMiddlename(String name, String middlename);

    List<User> findUserByNameAndSurnameAndMiddlename(String name, String surname, String middlename);

    User findUserByPassword(String password); //честно говоря этот метод запрещено юзаять, только для тестов

}
