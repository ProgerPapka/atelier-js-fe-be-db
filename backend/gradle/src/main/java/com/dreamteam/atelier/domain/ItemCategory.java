package com.dreamteam.atelier.domain;

import java.util.UUID;

/**
 * Базовый тип описывающий сущность - категория товара(обувь одежда новинки итд)
 */
public class ItemCategory {

    private String id;
    private UUID uuid;
    private String name;
    private String description;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
