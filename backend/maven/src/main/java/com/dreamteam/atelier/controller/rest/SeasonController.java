package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.Season;
import com.dreamteam.atelier.model.local.ProductSeason;
import com.dreamteam.atelier.service.domain.SeasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rest/season")
public class SeasonController {

    private final SeasonService seasonService;

    @Autowired
    public SeasonController(SeasonService seasonService) {
        this.seasonService = seasonService;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<List<Season>> getAllCategories() {
        return new ResponseEntity<>(seasonService.getAllSeasons(), HttpStatus.OK);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Season> createType(@RequestBody ProductSeason season) {
        return new ResponseEntity<>(seasonService.createSeason(season.getName(), season.getDescription()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteType(@RequestBody ProductSeason season) {
        seasonService.deleteSeason(season.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

}
