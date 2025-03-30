package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Notes;

import java.util.List;

@Repository
public interface NotesRepository extends MongoRepository<Notes, String> {
    List<Notes> findByUserId(String userId);
}
