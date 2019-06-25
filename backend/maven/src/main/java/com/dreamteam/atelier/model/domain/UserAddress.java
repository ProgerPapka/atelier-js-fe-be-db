package com.dreamteam.atelier.model.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.UUID;

/**
 * Базовый тип описывающий сущность - адрес пользователя
 */
@Document(collection = "usersAddresses")
@TypeAlias(value = "userAddress")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class UserAddress {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    private String region;
    private String city;
    private String street;
    private String house;
    private String flat;
    private String description; //дополнительное описание

}
