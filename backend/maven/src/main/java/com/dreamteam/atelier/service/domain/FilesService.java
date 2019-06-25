package com.dreamteam.atelier.service.domain;

import com.dreamteam.atelier.model.domain.CommonFile;
import com.dreamteam.atelier.model.local.SystemFile;
import com.dreamteam.atelier.repository.CommonFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FilesService {

    private final CommonFileRepository commonFileRepository;

    @Autowired
    public FilesService(CommonFileRepository commonFileRepository) {
        this.commonFileRepository = commonFileRepository;
    }

    public CommonFile getFileById(String id) {
        return commonFileRepository.findCommonFileById(id);
    }

    public CommonFile getFileByUuid(UUID uuid) {
        return commonFileRepository.findCommonFileByUuid(uuid);
    }

    public List<CommonFile> getFilesByName(String name) {
        return commonFileRepository.findCommonFileByName(name);
    }

    public SystemFile getSystemFileById(String id) {
        CommonFile commonFileById = commonFileRepository.findCommonFileById(id);
        return commonFileById != null ? createSystemFile(commonFileById) : new SystemFile();
    }

    public SystemFile getSystemFileByUuid(UUID uuid) {
        CommonFile commonFileByUuid = commonFileRepository.findCommonFileByUuid(uuid);
        return commonFileByUuid != null ? createSystemFile(commonFileByUuid) : new SystemFile();
    }

    private SystemFile createSystemFile(CommonFile commonFile) {
        SystemFile systemFile = new SystemFile();
        systemFile.setId(commonFile.getId());
        systemFile.setUuid(commonFile.getUuid());
        systemFile.setName(commonFile.getName());
        systemFile.setLink(commonFile.getLink());
        return systemFile;
    }

    public List<SystemFile> getSystemFilesByName(String name) {
        return commonFileRepository.findCommonFileByName(name)
                .stream().map(this::createSystemFile).collect(Collectors.toList());
    }

    public CommonFile saveFile(String fileName, String fileLink, byte[] fileData) {
        CommonFile commonFile = new CommonFile();
        commonFile.setUuid(UUID.randomUUID());
        commonFile.setName(fileName);
        commonFile.setLink(fileLink);
        commonFile.setBytes(fileData);
        return commonFileRepository.insert(commonFile);
    }

    public CommonFile updateFile(String id, String fileName, String fileLink, byte[] fileData) {
        CommonFile commonFile = commonFileRepository.findCommonFileById(id);
        commonFile.setName(fileName);
        commonFile.setLink(fileLink);
        commonFile.setBytes(fileData);
        return commonFileRepository.save(commonFile);
    }

    public CommonFile updateFileName(String id, String fileName) {
        CommonFile commonFile = commonFileRepository.findCommonFileById(id);
        commonFile.setName(fileName);
        return commonFileRepository.save(commonFile);
    }

    public CommonFile updateFileBytes(String id, byte[] fileData) {
        CommonFile commonFile = commonFileRepository.findCommonFileById(id);
        commonFile.setBytes(fileData);
        return commonFileRepository.save(commonFile);
    }

    public CommonFile updateFileLink(String id, String fileLink) {
        CommonFile commonFile = commonFileRepository.findCommonFileById(id);
        commonFile.setLink(fileLink);
        return commonFileRepository.save(commonFile);
    }

    public void deleteFileById(String id) {
        CommonFile commonFile = commonFileRepository.findCommonFileById(id);
        commonFileRepository.delete(commonFile);
    }
}
