package com.dreamteam.atelier.model.local;

import lombok.*;

import java.util.UUID;

@EqualsAndHashCode
@Data
@RequiredArgsConstructor
public class ProductCategory {

    private String id;
    private UUID uuid;
    private String name;
    private String description;

}
