package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Message;

import java.util.List;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findByGroupId(String groupId);
}
