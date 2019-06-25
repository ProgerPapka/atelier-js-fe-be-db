package com.dreamteam.atelier.controller.registration;

import com.dreamteam.atelier.model.local.RegistrationUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api/reg/")
public class RegistrationController {

    /**
     * /api/reg/registration
     * Метод регистрации нового пользователя
     *
     */
    @RequestMapping(value = "registration", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<RegistrationUser> registrationUser(){
        return new ResponseEntity<>(new RegistrationUser(), HttpStatus.OK);
    }



}
