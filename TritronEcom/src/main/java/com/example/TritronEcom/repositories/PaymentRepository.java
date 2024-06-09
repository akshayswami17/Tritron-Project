package com.example.TritronEcom.repositories;

//PaymentRepository.java



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TritronEcom.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
