package com.example.TritronEcom.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TritronEcom.entities.Feedback;
import com.example.TritronEcom.services.FeedbackService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FeedbackController {
     
	@Autowired
	FeedbackService fbservice;
	
	 @PostMapping("/feedbackform")
	    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
	        // Here you can process the feedback data, e.g., save it to a database
	        System.out.println("Received feedback: " + feedback.toString());
	        return ResponseEntity.ok("Feedback submitted successfully!");
	    }
}
