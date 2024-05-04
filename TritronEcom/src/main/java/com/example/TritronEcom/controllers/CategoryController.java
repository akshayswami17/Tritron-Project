package com.example.TritronEcom.controllers;



import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.Category;
import com.example.TritronEcom.entities.City;
import com.example.TritronEcom.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@PostMapping
//public Category addCategory(@RequestBody Category category) {
//  return categoryService.addCategory(category);
//}
//
//@PutMapping("/{id}")
//public Category updateCategory(@PathVariable Integer id, @RequestBody Category category) {
//  category.setCategoryId(id);
//  return categoryService.updateCategory(category);
//}
//
//@DeleteMapping("/{id}")
//public void deleteCategory(@PathVariable Integer id) {
//  categoryService.deleteCategory(id);
//}



@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/getCategories")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
    


}
