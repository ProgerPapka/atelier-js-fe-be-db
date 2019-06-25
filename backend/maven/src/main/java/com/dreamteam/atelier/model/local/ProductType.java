package com.dreamteam.atelier.model.local;

import lombok.*;

import java.util.UUID;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode
public class ProductType {

    private String id;
    private UUID uuid;
    private String name;
    private String description;

}
