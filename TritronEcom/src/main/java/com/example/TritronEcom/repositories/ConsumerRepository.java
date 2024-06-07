package com.example.TritronEcom.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.Consumer;
import com.example.TritronEcom.entities.User;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Integer> {

	Consumer findByUser(User user);
}
