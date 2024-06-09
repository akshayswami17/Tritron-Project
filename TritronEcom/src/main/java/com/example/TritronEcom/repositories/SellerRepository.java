package com.example.TritronEcom.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer> {

//	Seller findByUserId(Integer userId);
}
