package com.dreamteam.atelier.model.local;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class RegistrationUser {

    private String email;
    private String mobile;
    private Boolean registr;

    public RegistrationUser() {
        registr = false;
    }

}
