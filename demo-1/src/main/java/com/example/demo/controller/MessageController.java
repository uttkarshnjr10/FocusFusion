package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Message;
import com.example.demo.service.MessageService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/messages")
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessageById(@PathVariable String id) {
        return messageService.getMessageById(id);
    }

    @GetMapping("/group/{groupId}")
    public List<Message> getMessagesByGroupId(@PathVariable String groupId) {
        return messageService.getMessagesByGroupId(groupId);
    }

    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        return messageService.createMessage(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable String id) {
        messageService.deleteMessage(id);
    }
}
