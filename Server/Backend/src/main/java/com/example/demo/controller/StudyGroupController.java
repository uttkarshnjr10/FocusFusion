package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Study_group;
import com.example.demo.service.StudyGroupService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/study-groups")
@CrossOrigin(origins = "http://localhost:3000")
public class StudyGroupController {
    @Autowired
    private StudyGroupService studyGroupService;

    @GetMapping
    public List<Study_group> getAllGroups() {
        return studyGroupService.getAllGroups();
    }

    @GetMapping("/{id}")
    public Optional<Study_group> getGroupById(@PathVariable String id) {
        return studyGroupService.getGroupById(id);
    }

    @PostMapping
    public Study_group createGroup(@RequestBody Study_group studyGroup) {
        return studyGroupService.createGroup(studyGroup);
    }

    @DeleteMapping("/{id}")
    public void deleteGroup(@PathVariable String id) {
        studyGroupService.deleteGroup(id);
    }
}
