package com.dreamteam.atelier.model.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.awt.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Базовый тип который описывает сущность - товар
 */
@Document(collection = "items")
@TypeAlias(value = "item")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class Item {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    private String name; //наименование
    private String description; //описание
    @DBRef
    private List<CommonFile> commonFiles; //файлы-фоточки
    private List<String> dimensions; //размеры
    private Double price; //цена
    private LocalDateTime createDate; //дата создания
    private Integer sale; //скидка
    @DBRef
    private List<ItemCategory> itemCategory; //катеории товара
    @DBRef
    private List<ItemType> itemType; //типы товара
    @DBRef
    private Season season;

    public void addCommonFile(CommonFile commonFile) {
        if (commonFiles == null) {
            commonFiles = new ArrayList<>();
        }
        commonFiles.add(commonFile);
    }

    public void removeCommonFile(CommonFile commonFile) {
        if (commonFiles != null) {
            commonFiles.remove(commonFile);
        }
    }

    public void addDimensions(String dimension) {
        if (dimensions == null) {
            dimensions = new ArrayList<>();
        }
        dimensions.add(dimension);
    }

    public void removeDimensions(String dimension) {
        if (dimensions != null) {
            dimensions.remove(dimension);
        }
    }

    public void addItemCategory(ItemCategory itemCat) {
        if (itemCategory == null) {
            itemCategory = new ArrayList<>();
        }
        itemCategory.add(itemCat);
    }

    public void removeItemCategory(ItemCategory itemCat) {
        if (itemCategory != null) {
            itemCategory.remove(itemCat);
        }
    }

    public void addItemType(ItemType itemTyp) {
        if (itemType == null) {
            itemType = new ArrayList<>();
        }
        itemType.add(itemTyp);
    }

    public void removeItemType(ItemType itemTyp) {
        if (itemType != null) {
            itemType.remove(itemTyp);
        }
    }

}
