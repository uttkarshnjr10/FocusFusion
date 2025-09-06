package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Planner;
import com.example.demo.repo.PlannerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlannerService {
    @Autowired
    private PlannerRepository plannerRepository;

    public List<Planner> getAllPlans() {
        return plannerRepository.findAll();
    }

    public Optional<Planner> getPlanById(String id) {
        return plannerRepository.findById(id);
    }

    public Planner createPlan(Planner planner) {
        return plannerRepository.save(planner);
    }

    public void deletePlan(String id) {
        plannerRepository.deleteById(id);
    }
}
