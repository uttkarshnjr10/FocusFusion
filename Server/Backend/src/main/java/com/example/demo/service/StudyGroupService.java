package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Study_group;
import com.example.demo.repo.StudyGroupRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudyGroupService {
    @Autowired
    private StudyGroupRepository studyGroupRepository;

    public List<Study_group> getAllGroups() {
        return studyGroupRepository.findAll();
    }

    public Optional<Study_group> getGroupById(String id) {
        return studyGroupRepository.findById(id);
    }

    public Study_group createGroup(Study_group studyGroup) {
        return studyGroupRepository.save(studyGroup);
    }

    public void deleteGroup(String id) {
        studyGroupRepository.deleteById(id);
    }
}
