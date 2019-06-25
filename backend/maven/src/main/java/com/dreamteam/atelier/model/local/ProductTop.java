package com.dreamteam.atelier.model.local;

import lombok.*;

import java.util.UUID;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode
public class ProductTop {

    String Id;
    UUID uuid;
    String itemId;
    String userId;
    Integer value;

}
