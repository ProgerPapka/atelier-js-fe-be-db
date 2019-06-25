package com.dreamteam.atelier.domain;

import java.util.UUID;

/**
 * Базовый тип описывающий сущность - файл, документ, то что можно сохранить в виде массива байтов
 */
public class CommonFile {

    private String id;
    private UUID uuid;
    private String name; //наименование файла
    private String link; //ссылка на файл если таковой есть
    private byte[] bytes; //байты файла

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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public byte[] getBytes() {
        return bytes;
    }

    public void setBytes(byte[] bytes) {
        this.bytes = bytes;
    }
}
