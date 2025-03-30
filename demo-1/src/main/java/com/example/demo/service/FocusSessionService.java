package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FocusSession;
import com.example.demo.repo.FocusSessionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FocusSessionService {
    @Autowired
    private FocusSessionRepository focusSessionRepository;

    public List<FocusSession> getAllSessions() {
        return focusSessionRepository.findAll();
    }

    public Optional<FocusSession> getSessionById(String id) {
        return focusSessionRepository.findById(id);
    }

    public FocusSession createSession(FocusSession session) {
        return focusSessionRepository.save(session);
    }

    public void deleteSession(String id) {
        focusSessionRepository.deleteById(id);
    }
}
