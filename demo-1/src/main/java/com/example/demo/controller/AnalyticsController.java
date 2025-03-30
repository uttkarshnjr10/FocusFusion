package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Analytics;
import com.example.demo.service.AnalyticsService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/analytics")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalyticsController {
    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping
    public List<Analytics> getAllAnalytics() {
        return analyticsService.getAllAnalytics();
    }

    @GetMapping("/{id}")
    public Optional<Analytics> getAnalyticsById(@PathVariable String id) {
        return analyticsService.getAnalyticsById(id);
    }

    @PostMapping
    public Analytics createAnalytics(@RequestBody Analytics analytics) {
        return analyticsService.createAnalytics(analytics);
    }

    @DeleteMapping("/{id}")
    public void deleteAnalytics(@PathVariable String id) {
        analyticsService.deleteAnalytics(id);
    }
}
