package com.example.TritronEcom.repositories;


import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.entities.Category;
import com.example.TritronEcom.entities.City;
import com.example.TritronEcom.entities.Model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRepository extends JpaRepository<Model, Integer> {
 	@Query("Select m  from Model m where m.category = :category and m.brand = :brand")
 	public List<Model> getModelsByCategoryAndBrand(Category category, Brand brand);
}
