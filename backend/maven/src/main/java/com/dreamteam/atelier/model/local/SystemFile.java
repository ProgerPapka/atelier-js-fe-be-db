package com.dreamteam.atelier.model.local;

import lombok.*;

import java.util.UUID;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode
public class SystemFile {

    private String id;
    private UUID uuid;
    private String name;
    private String link;
    private byte[] data;

}
