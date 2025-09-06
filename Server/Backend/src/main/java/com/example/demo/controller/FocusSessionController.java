package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.FocusSession;
import com.example.demo.service.FocusSessionService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/focus-sessions")
@CrossOrigin(origins = "http://localhost:3000")
public class FocusSessionController {
    @Autowired
    private FocusSessionService focusSessionService;

    @GetMapping
    public List<FocusSession> getAllSessions() {
        return focusSessionService.getAllSessions();
    }

    @GetMapping("/{id}")
    public Optional<FocusSession> getSessionById(@PathVariable String id) {
        return focusSessionService.getSessionById(id);
    }

    @PostMapping
    public FocusSession createSession(@RequestBody FocusSession session) {
        return focusSessionService.createSession(session);
    }

    @DeleteMapping("/{id}")
    public void deleteSession(@PathVariable String id) {
        focusSessionService.deleteSession(id);
    }

    @PostMapping("/start")
    public FocusSession startSession(@RequestBody String userId) {
        return focusSessionService.startSession(userId);
    }

    @PostMapping("/end/{sessionId}")
    public FocusSession endSession(@PathVariable String sessionId) {
        return focusSessionService.endSession(sessionId);
    }

    @GetMapping("/today")
    public int getTodayStudyTime(@RequestParam String userId) {
        return focusSessionService.getTodayStudyTime(userId);
    }
}
