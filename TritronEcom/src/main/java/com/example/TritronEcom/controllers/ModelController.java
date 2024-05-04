package com.example.TritronEcom.controllers;



import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.Model;
import com.example.TritronEcom.services.BrandService;
import com.example.TritronEcom.services.CategoryService;
import com.example.TritronEcom.services.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
//@PostMapping
//public Model addModel(@RequestBody Model model) {
//  return modelService.addModel(model);
//}
//
//@PutMapping("/{id}")
//public Model updateModel(@PathVariable Integer id, @RequestBody Model model) {
//  model.setModel_Id(id);
//  return modelService.updateModel(model);
//}
//
//@DeleteMapping("/{id}")
//public void deleteModel(@PathVariable Integer id) {
//  modelService.deleteModel(id);
//}


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ModelController {

    @Autowired
    private ModelService modelService;
    
    @Autowired
    private CategoryService categoryService;
    
    @Autowired
    private BrandService brandService;
   
    
    @GetMapping("/getAllModels")
    public List<Model> getAllModels() {
        return modelService.getAllModels();
    }

    @GetMapping("/getModels")
    public List<Model> getModelsByCategoryAndBrand(@RequestParam int categoryid,@RequestParam int brandid) {
        return modelService.getModel1(categoryid,brandid);
    }
    
    @GetMapping("/getModel")
    public Model getModelById(@PathVariable Integer modelid) {
        return modelService.getModelById(modelid);
    }



}
