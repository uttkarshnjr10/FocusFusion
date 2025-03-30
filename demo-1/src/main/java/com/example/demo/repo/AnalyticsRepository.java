package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Analytics;

import java.util.Optional;

@Repository
public interface AnalyticsRepository extends MongoRepository<Analytics, String> {
    Optional<Analytics> findByUserId(String userId);
}
