package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FocusSession;

import java.util.List;

@Repository
public interface FocusSessionRepository extends MongoRepository<FocusSession, String> {
    List<FocusSession> findByUserId(String userId);
}
