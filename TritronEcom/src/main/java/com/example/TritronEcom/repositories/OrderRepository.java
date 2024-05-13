package com.example.TritronEcom.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
