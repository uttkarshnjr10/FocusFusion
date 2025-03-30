package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Planner;
import com.example.demo.service.PlannerService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/planner")
@CrossOrigin(origins = "http://localhost:3000")
public class PlannerController {
    @Autowired
    private PlannerService plannerService;

    @GetMapping
    public List<Planner> getAllPlans() {
        return plannerService.getAllPlans();
    }

    @GetMapping("/{id}")
    public Optional<Planner> getPlanById(@PathVariable String id) {
        return plannerService.getPlanById(id);
    }

    @PostMapping
    public Planner createPlan(@RequestBody Planner planner) {
        return plannerService.createPlan(planner);
    }

    @DeleteMapping("/{id}")
    public void deletePlan(@PathVariable String id) {
        plannerService.deletePlan(id);
    }
}

