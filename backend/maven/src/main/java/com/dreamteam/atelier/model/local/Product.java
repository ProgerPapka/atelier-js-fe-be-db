package com.dreamteam.atelier.model.local;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@EqualsAndHashCode
@Data
@RequiredArgsConstructor
public class Product {

    private String id;
    private UUID uuid;
    private String name; //наименование
    private String description; //описание
    private List<String> commonFilesId; //файлы-фоточки
    private List<String> dimensions; //размеры
    private Double price; //цена
    private Double minPrice; //цена
    private Double maxPrice; //цена
    private LocalDateTime createDate; //дата создания
    private Integer sale; //скидка
    private Integer minSale; //скидка
    private Integer maxSale; //скидка
    private List<String> itemCategoryId; //катеории товара
    private List<String> itemTypeId; //типы товара
    private String seasonId;

}
