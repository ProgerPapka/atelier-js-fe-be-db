package com.dreamteam.atelier.model.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document
@TypeAlias(value = "userRole")
@Data
@EqualsAndHashCode
@RequiredArgsConstructor
public class UserRole {

    @Id
    private String id;
    @Indexed(unique = true)
    private UUID uuid;
    private String role;
    private String description;
}
