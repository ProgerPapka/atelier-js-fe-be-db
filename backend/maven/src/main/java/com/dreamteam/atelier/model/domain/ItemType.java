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
 * Базовый тип описывающий сущность - тип товара(мужской женский фурнитура итд)
 */
@Document(collection = "itemTypes")
@TypeAlias(value = "itemType")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class ItemType {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    @Indexed(unique = true)
    private String name;
    private String description;

}
