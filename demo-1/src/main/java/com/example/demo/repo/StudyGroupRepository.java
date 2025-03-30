package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Study_group;

import java.util.List;

@Repository
public interface StudyGroupRepository extends MongoRepository<Study_group, String> {
    List<Study_group> findByTargetExam(String targetExam);
}
