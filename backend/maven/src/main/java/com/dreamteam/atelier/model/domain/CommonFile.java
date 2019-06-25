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
 * Базовый тип описывающий сущность - файл, документ, то что можно сохранить в виде массива байтов
 */
@Document(collection = "commonFiles")
@TypeAlias(value = "commonFile")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class CommonFile {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    private String name; //наименование файла
    private String link; //ссылка на файл если таковой есть
    private byte[] bytes; //байты файла

}
