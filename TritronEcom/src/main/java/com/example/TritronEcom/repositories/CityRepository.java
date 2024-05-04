package com.example.TritronEcom.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

}
