package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Notes;
import com.example.demo.repo.NotesRepository;

import java.util.List;
import java.util.Optional;

@Service
public class NotesService {
    @Autowired
    private NotesRepository notesRepository;

    public List<Notes> getAllNotes() {
        return notesRepository.findAll();
    }

    public Optional<Notes> getNotesById(String id) {
        return notesRepository.findById(id);
    }

    public Notes createNotes(Notes notes) {
        return notesRepository.save(notes);
    }

    public void deleteNotes(String id) {
        notesRepository.deleteById(id);
    }
}
