package com.example.TritronEcom.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Payment;
import com.example.TritronEcom.repositories.PaymentRepository;
import com.example.TritronEcom.repositories.UserRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    public Payment savePayment(Payment payment, Integer userId) {
        return userRepository.findById(userId).map(user -> {
            payment.setUser(user);
            return paymentRepository.save(payment);
        }).orElseThrow(() -> new RuntimeException("User not found with id " + userId));
    }
}
