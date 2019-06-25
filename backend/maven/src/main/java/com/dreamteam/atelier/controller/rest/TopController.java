package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.Top;
import com.dreamteam.atelier.model.local.ProductTop;
import com.dreamteam.atelier.service.domain.TopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rest/top")
public class TopController {

    private final TopService topService;

    @Autowired
    public TopController(TopService topService) {
        this.topService = topService;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Top> createTop(@RequestBody ProductTop top) {
        List<Top> listTop = topService.getTopByUserAndItem(top.getItemId(), top.getUserId());
        if (listTop == null || listTop.size() == 0) {
            return new ResponseEntity<>(topService.createTop(top.getItemId(),
                    top.getUserId(), top.getValue()), HttpStatus.OK);
        }
        return new ResponseEntity<>(new Top(), HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteTop(@RequestBody ProductTop top) {
        topService.removeTop(top.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @RequestMapping(value = "/getByItem", method = RequestMethod.POST)
    public ResponseEntity<List<Top>> getTopByItem(@RequestBody ProductTop top) {
        return new ResponseEntity<>(topService.getTopByItem(top.getItemId()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getAverageByItem", method = RequestMethod.POST)
    public ResponseEntity<Double> getAverageTopByItem(@RequestBody ProductTop top) {
        return new ResponseEntity<>(topService.getAverageTopByItem(top.getItemId()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getByUser", method = RequestMethod.POST)
    public ResponseEntity<List<Top>> getTopByUser(@RequestBody ProductTop top) {
        return new ResponseEntity<>(topService.getTopByUser(top.getUserId()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getByUserAndItem", method = RequestMethod.POST)
    public ResponseEntity<Top> getTopByUserAndItem(@RequestBody ProductTop top) {
        List<Top> list = topService.getTopByUserAndItem(top.getItemId(), top.getUserId());
        if (list != null && list.size() > 0) {
            return new ResponseEntity<>(list.get(0), HttpStatus.OK);
        }
        return new ResponseEntity<>(new Top(), HttpStatus.BAD_REQUEST);
    }
}
