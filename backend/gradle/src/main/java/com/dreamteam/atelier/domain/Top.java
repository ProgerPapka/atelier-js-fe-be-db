package com.dreamteam.atelier.domain;

import java.util.UUID;

/**
 * Базовый тип описывающий сущность - рейтинг
 */
public class Top {

    private String id;
    private UUID uuid;
    private Integer value; //значение рейтинга
    private Item item; //товар
    private User user; //пользователь

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

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
