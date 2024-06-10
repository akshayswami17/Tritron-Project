package com.example.TritronEcom.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Payment;
import com.example.TritronEcom.entities.PaymentDTO;
import com.example.TritronEcom.repositories.PaymentRepository;
import com.example.TritronEcom.repositories.UserRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    public Payment savePayment(PaymentDTO paymentDTO) {
        return userRepository.findById(paymentDTO.getUserId()).map(user -> {
            Payment payment = new Payment();
            payment.setName(paymentDTO.getName());
            payment.setPhone(paymentDTO.getPhone());
            payment.setAmount(paymentDTO.getAmount());
            payment.setPaymentMethod(paymentDTO.getPaymentMethod());
            payment.setUser(user);
            return paymentRepository.save(payment);
        }).orElseThrow(() -> new RuntimeException("User not found with id " + paymentDTO.getUserId()));
    }
}
