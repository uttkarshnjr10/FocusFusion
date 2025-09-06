package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Analytics;
import com.example.demo.repo.AnalyticsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AnalyticsService {
    @Autowired
    private AnalyticsRepository analyticsRepository;

    public List<Analytics> getAllAnalytics() {
        return analyticsRepository.findAll();
    }

    public Optional<Analytics> getAnalyticsById(String id) {
        return analyticsRepository.findById(id);
    }

    public Analytics createAnalytics(Analytics analytics) {
        return analyticsRepository.save(analytics);
    }

    public void deleteAnalytics(String id) {
        analyticsRepository.deleteById(id);
    }
}
