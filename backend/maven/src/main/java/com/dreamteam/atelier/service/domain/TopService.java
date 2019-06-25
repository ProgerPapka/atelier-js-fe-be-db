package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.Item;
import com.dreamteam.atelier.model.domain.Top;
import com.dreamteam.atelier.model.domain.User;
import com.dreamteam.atelier.repository.ItemRepository;
import com.dreamteam.atelier.repository.TopRepository;
import com.dreamteam.atelier.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TopService {

    private final TopRepository topRepository;
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;

    @Autowired
    public TopService(TopRepository topRepository, UserRepository userRepository, ItemRepository itemRepository) {
        this.topRepository = topRepository;
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
    }

    public Top createTop(String itemId, String userId, Integer topValue) {
        Top top = new Top();
        Item itemById = itemRepository.findItemById(itemId);
        User userById = userRepository.findUserById(userId);
        if (itemById != null && userById != null) {
            top.setUuid(UUID.randomUUID());
            top.setUser(userById);
            top.setItem(itemById);
            top.setValue(topValue);
            return topRepository.insert(top);
        }
        return top;
    }

    public List<Top> getTopByItem(String itemId) {
        Item itemById = itemRepository.findItemById(itemId);
        if (itemById != null) {
            return topRepository.findAllByItem(itemById);
        }
        return Collections.emptyList();
    }

    public Double getAverageTopByItem(String itemId) {
        List<Top> topByItem = getTopByItem(itemId);
        Optional<Integer> sum = topByItem.stream().map(Top::getValue)
                .reduce((integer1, integer2) -> integer1 + integer2);
        if (sum.isPresent()) {
            Integer sumValue = sum.get();
            return sumValue.doubleValue() / topByItem.size();
        }
        return null;
    }

    public List<Top> getTopByUser(String userId) {
        User userById = userRepository.findUserById(userId);
        if (userById != null) {
            return topRepository.findAllByUser(userById);
        }
        return Collections.emptyList();
    }

    public List<Top> getTopByUserAndItem(String itemId, String userId) {
        Item itemById = itemRepository.findItemById(itemId);
        User userById = userRepository.findUserById(userId);
        if (itemById != null && userById != null) {
            return topRepository.findAllByItemAndUser(itemById, userById);
        }
        return Collections.emptyList();
    }

    public void removeTop(String topId) {
        Top topById = topRepository.findTopById(topId);
        if (topById != null) {
            topRepository.delete(topById);
        }
    }

}
