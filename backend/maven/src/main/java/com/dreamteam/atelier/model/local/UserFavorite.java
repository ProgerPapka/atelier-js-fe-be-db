package com.dreamteam.atelier.model.local;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode
public class UserFavorite {

    private String id;
    private UUID uuid;
    private String itemId;
    private List<String> itemsId;

}
