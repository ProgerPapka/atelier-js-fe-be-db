package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.Season;
import com.dreamteam.atelier.repository.SeasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SeasonService {

    private final SeasonRepository itemTypeRepository;

    @Autowired
    public SeasonService(SeasonRepository itemTypeRepository) {
        this.itemTypeRepository = itemTypeRepository;
    }

    public List<Season> getAllSeasons() {
        return itemTypeRepository.findAll();
    }

    public Season createSeason(String name, String description) {
        Season season = new Season();
        season.setUuid(UUID.randomUUID());
        season.setName(name);
        season.setDescription(description);
        return itemTypeRepository.insert(season);
    }

    public void deleteSeason(String id) {
        Season season = itemTypeRepository.findSeasonById(id);
        if (season != null) {
            itemTypeRepository.delete(season);
        }
    }
    
}
