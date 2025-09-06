package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Planner;

import java.util.List;

@Repository
public interface PlannerRepository extends MongoRepository<Planner, String> {
    List<Planner> findByUserId(String userId);
}
