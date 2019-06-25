package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.Favorite;
import com.dreamteam.atelier.model.domain.Item;
import com.dreamteam.atelier.repository.FavoriteRepository;
import com.dreamteam.atelier.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final ItemRepository itemRepository;

    @Autowired
    public FavoriteService(FavoriteRepository favoriteRepository, ItemRepository itemRepository) {
        this.favoriteRepository = favoriteRepository;
        this.itemRepository = itemRepository;
    }

    public Favorite createFavorite() {
        Favorite favorite = new Favorite();
        favorite.setUuid(UUID.randomUUID());
        return favoriteRepository.insert(favorite);
    }

    public void deleteFavorite(String id) {
        Favorite favorite = favoriteRepository.findFavoriteById(id);
        if (favorite != null) {
            favoriteRepository.delete(favorite);
        }
    }

    public Favorite addItemToFavorite(String favoriteId, String itemId) {
        Favorite favorite = favoriteRepository.findFavoriteById(favoriteId);
        Item itemById = itemRepository.findItemById(itemId);
        if (favorite != null && itemById != null) {
            favorite.addItem(itemById);
            return favoriteRepository.save(favorite);
        }
        return favorite;
    }

    public Favorite removeItemFromFavorite(String favoriteId, String itemId) {
        Favorite favorite = favoriteRepository.findFavoriteById(favoriteId);
        Item itemById = itemRepository.findItemById(itemId);
        if (favorite != null && itemById != null) {
            favorite.removeItem(itemById);
            return favoriteRepository.save(favorite);
        }
        return favorite;
    }

    public Favorite removeItemsFromFavorite(String favoriteId, List<String> itemId) {
        Favorite favorite = favoriteRepository.findFavoriteById(favoriteId);
        if (favorite != null) {
            for (String item : itemId) {
                Item itemById = itemRepository.findItemById(item);
                if (itemById != null) {
                    favorite.removeItem(itemById);
                    favoriteRepository.save(favorite);
                }
            }
        }
        return favorite;
    }

}
