package com.example.TritronEcom.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TritronEcom.entities.Feedback;
import com.example.TritronEcom.services.FeedbackService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FeedbackController {
     
    @Autowired
    FeedbackService feedbackService;
    
    @PostMapping("/feedbackform")
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        feedbackService.saveFeedback(feedback); // Save feedback using service
        return ResponseEntity.ok("Feedback submitted successfully!");
    }
    
    @GetMapping("/getAllFeedbacks") // Add mapping for getAllFeedbacks endpoint
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.getAllFeedbacks();
    }
}
