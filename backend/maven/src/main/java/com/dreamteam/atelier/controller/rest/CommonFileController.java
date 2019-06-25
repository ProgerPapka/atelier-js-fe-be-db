package com.dreamteam.atelier.controller.rest;

import com.dreamteam.atelier.model.domain.CommonFile;
import com.dreamteam.atelier.model.local.SystemFile;
import com.dreamteam.atelier.service.domain.FilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rest/files")
public class CommonFileController {

    private final FilesService filesService;

    @Autowired
    public CommonFileController(FilesService filesService) {
        this.filesService = filesService;
    }

    @RequestMapping(value = "/getFileById", method = RequestMethod.POST)
    public ResponseEntity<SystemFile> getFileDescriptionById(@RequestBody SystemFile file) {
        return new ResponseEntity<>(filesService.getSystemFileById(file.getId()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getFileByUuid", method = RequestMethod.POST)
    public ResponseEntity<SystemFile> getFileDescriptionByUuid(@RequestBody SystemFile file) {
        return new ResponseEntity<>(filesService.getSystemFileByUuid(file.getUuid()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getFilesByName", method = RequestMethod.POST)
    public ResponseEntity<List<SystemFile>> getFilesDescriptionByName(@RequestBody SystemFile file) {
        return new ResponseEntity<>(filesService.getSystemFilesByName(file.getName()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getCommonFileById", method = RequestMethod.POST)
    public ResponseEntity<CommonFile> getFileById(@RequestBody SystemFile file) {
        return new ResponseEntity<>(filesService.getFileById(file.getId()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getCommonFileByUuid", method = RequestMethod.POST)
    public ResponseEntity<CommonFile> getFileByUuid(@RequestBody SystemFile file) {
        return new ResponseEntity<>(filesService.getFileByUuid(file.getUuid()), HttpStatus.OK);
    }

    @RequestMapping(value = "/getCommonFilesByName", method = RequestMethod.POST)
    public ResponseEntity<List<CommonFile>> getFilesByName(@RequestBody SystemFile file) {
        return new ResponseEntity<>(filesService.getFilesByName(file.getName()), HttpStatus.OK);
    }

    @RequestMapping(value = "/saveFile", method = RequestMethod.POST)
    public ResponseEntity<CommonFile> saveFile(@RequestBody SystemFile file) {
        CommonFile commonFile = filesService.saveFile(file.getName(), file.getLink(), file.getData());
        return commonFile != null ? new ResponseEntity<>(commonFile, HttpStatus.OK) :
                new ResponseEntity<>(new CommonFile(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/updateFile", method = RequestMethod.POST)
    public ResponseEntity<Boolean> updateFile(@RequestBody SystemFile file) {
        CommonFile commonFile = filesService.updateFile(file.getId(), file.getName(), file.getLink(), file.getData());
        return commonFile != null ? new ResponseEntity<>(true, HttpStatus.OK) :
                new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/updateFileName", method = RequestMethod.POST)
    public ResponseEntity<Boolean> updateFileName(@RequestBody SystemFile file) {
        CommonFile commonFile = filesService.updateFileName(file.getId(), file.getName());
        return commonFile != null ? new ResponseEntity<>(true, HttpStatus.OK) :
                new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/updateFileLink", method = RequestMethod.POST)
    public ResponseEntity<Boolean> updateFileLink(@RequestBody SystemFile file) {
        CommonFile commonFile = filesService.updateFileLink(file.getId(), file.getLink());
        return commonFile != null ? new ResponseEntity<>(true, HttpStatus.OK) :
                new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/updateFileData", method = RequestMethod.POST)
    public ResponseEntity<Boolean> updateFileData(@RequestBody SystemFile file) {
        CommonFile commonFile = filesService.updateFileBytes(file.getId(), file.getData());
        return commonFile != null ? new ResponseEntity<>(true, HttpStatus.OK) :
                new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/deleteFile", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteFile(@RequestBody SystemFile file) {
        filesService.deleteFileById(file.getId());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
