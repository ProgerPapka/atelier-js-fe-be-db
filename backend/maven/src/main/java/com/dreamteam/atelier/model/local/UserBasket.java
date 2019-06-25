package com.dreamteam.atelier.model.local;

import lombok.*;

import java.util.UUID;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode
public class UserBasket {

    private String id;
    private UUID uuid;
    private String itemId;
}
