package com.example.TritronEcom.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Feedback;
import com.example.TritronEcom.repositories.FeedbackRepository;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository; // Assuming you have a FeedbackRepository

    // Save feedback method
    public Feedback saveFeedback(Feedback feedback) {
        // Here you can perform any additional business logic before saving
        // For example, data validation, processing, etc.

        // Save the feedback using the repository
        return feedbackRepository.save(feedback);
    }
    
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }
}
