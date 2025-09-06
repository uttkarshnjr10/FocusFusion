package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FocusSession;
import com.example.demo.repo.FocusSessionRepository;

import java.util.Calendar;
import java.util.Date;
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

    public FocusSession startSession(String userId) {
        FocusSession session = new FocusSession();
        session.setUserId(userId);
        session.setStartTime(new Date());
        session.setDuration(0); // Initial duration
        return focusSessionRepository.save(session);
    }

    public FocusSession endSession(String sessionId) {
        Optional<FocusSession> optionalSession = focusSessionRepository.findById(sessionId);
        if (optionalSession.isPresent()) {
            FocusSession session = optionalSession.get();
            session.setEndTime(new Date());
            long durationInMillis = session.getEndTime().getTime() - session.getStartTime().getTime();
            int durationInMinutes = (int) (durationInMillis / (1000 * 60)); // Convert to minutes
            session.setDuration(durationInMinutes);
            return focusSessionRepository.save(session);
        }
        throw new RuntimeException("Session not found with ID: " + sessionId);
    }

    public int getTodayStudyTime(String userId) {
        List<FocusSession> sessions = focusSessionRepository.findByUserId(userId);
        Calendar today = Calendar.getInstance();
        today.set(Calendar.HOUR_OF_DAY, 0);
        today.set(Calendar.MINUTE, 0);
        today.set(Calendar.SECOND, 0);
        today.set(Calendar.MILLISECOND, 0);
        Date startOfDay = today.getTime();

        int totalMinutes = 0;
        for (FocusSession session : sessions) {
            if (session.getStartTime() != null && session.getEndTime() != null &&
                    session.getStartTime().after(startOfDay)) {
                totalMinutes += session.getDuration();
            }
        }
        return totalMinutes;
    }
}