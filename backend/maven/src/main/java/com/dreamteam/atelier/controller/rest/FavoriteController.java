package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.Favorite;
import com.dreamteam.atelier.model.local.UserFavorite;
import com.dreamteam.atelier.service.domain.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rest/favorite/")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @Autowired
    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public ResponseEntity<Favorite> createFavorite() {
        return new ResponseEntity<>(favoriteService.createFavorite(), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteFavorite(@RequestBody UserFavorite userFavorite) {
        favoriteService.deleteFavorite(userFavorite.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @RequestMapping(value = "/addItem", method = RequestMethod.POST)
    public ResponseEntity<Favorite> addItemToFavorite(@RequestBody UserFavorite userFavorite) {
        return new ResponseEntity<>(favoriteService.addItemToFavorite(userFavorite.getId(), userFavorite.getItemId()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/deleteItem", method = RequestMethod.DELETE)
    public ResponseEntity<Favorite> deleteItemFromFavorite(@RequestBody UserFavorite userFavorite) {
        return new ResponseEntity<>(favoriteService.removeItemFromFavorite(userFavorite.getId(), userFavorite.getItemId()),
                HttpStatus.OK);
    }

    @RequestMapping(value = "/deleteItems", method = RequestMethod.DELETE)
    public ResponseEntity<Favorite> deleteItemsFromFavorite(@RequestBody UserFavorite userFavorite) {
        return new ResponseEntity<>(favoriteService.removeItemsFromFavorite(userFavorite.getId(), userFavorite.getItemsId()),
                HttpStatus.OK);
    }
}
