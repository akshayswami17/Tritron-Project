package com.example.TritronEcom.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Category;
import com.example.TritronEcom.repositories.CategoryRepository;
//public CategoryService getCategoryById(Integer id) {
//return categoryRepository.findById(id).orElse(null);
//}
//
//public CategoryService addCategory(CategoryService category) {
//return categoryRepository.save(category);
//}
//
//public CategoryService updateCategory(CategoryService category) {
//return categoryRepository.save(category);
//}
//
//public void deleteCategory(Integer id) {
//categoryRepository.deleteById(id);
//}



@Service
public class CategoryService {

	    @Autowired
	    private CategoryRepository categoryRepository;

	    public List<Category> getAllCategories() {
	        return categoryRepository.findAll();
	    }


}

