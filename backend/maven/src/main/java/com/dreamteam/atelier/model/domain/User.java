package com.dreamteam.atelier.model.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.UUID;

/**
 * Базовый тип описывающий сущность - пользователь
 */
@Document(collection = "users")
@TypeAlias(value = "user")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class User {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    @Indexed(unique = true)
    private String login;
    @Indexed(unique = true)
    private String password;
    @Indexed(unique = true)
    private String email;
    @Indexed(unique = true)
    private String mobile;
    private String name;
    private String surname;
    private String middlename;
    @Indexed(unique = true)
    private String nikname;
    @DBRef
    private Basket basket;
    @DBRef
    private Favorite favorite;
    @DBRef
    private CommonFile avatar;
    @DBRef
    private UserAddress userAddress;
    @DBRef
    private UserRole userRole;

}
