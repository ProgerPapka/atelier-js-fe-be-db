package com.dreamteam.atelier.domain;

import java.util.List;
import java.util.UUID;

/**
 * Базовый тип описывающий сущность - избранные пользователя
 */
public class Favorite {

    private String id;
    private UUID uuid;
    private List<Item> items;

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

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
