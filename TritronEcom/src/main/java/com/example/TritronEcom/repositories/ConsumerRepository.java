package com.example.TritronEcom.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.Consumer;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Integer> {

}
