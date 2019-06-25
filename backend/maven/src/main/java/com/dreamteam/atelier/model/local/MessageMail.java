package com.dreamteam.atelier.model.local;

import lombok.*;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
@RequiredArgsConstructor
@Data
public class MessageMail {

    private String emailTo;
    private String subject;
    private String text;

}
