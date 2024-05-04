package com.example.TritronEcom.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
