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
 * Базовый тип описывающий сущность - рейтинг
 */
@Document(collection = "top")
@TypeAlias(value = "top")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class Top {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    private Integer value; //значение рейтинга
    @DBRef
    private Item item; //товар
    @DBRef
    private User user; //пользователь

}
