package com.example.TritronEcom.controllers;

import com.example.TritronEcom.entities.Model2;
import com.example.TritronEcom.entities.Product;
import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.repositories.Model2Repository;
import com.example.TritronEcom.services.Model2Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class Model2Controller {

    @Autowired
    private Model2Service model2Service;

    @Autowired
    private Model2Repository model2Repository;

	private Seller Seller;

    @PostMapping("/addModel")
    public ResponseEntity<Model2> addModel(@RequestBody Model2 model) {
        Model2 savedModel = model2Service.addModel(model);
        return ResponseEntity.ok(savedModel);
    }

    @GetMapping("/getAllModels")
    public List<Model2> getAllModels() {
        return model2Service.getAllModels();
    }

//    @GetMapping("/getProducts/{id}")
//    public Model2 getModelById(@PathVariable Integer id) {
//        return model2Repository.findById(id).orElse(null);
//    }
//    @GetMapping("/getProducts/{id}")
//    public ResponseEntity<Product> getProduct(@PathVariable Integer id) {
//        // Logic to get product by ID
//        Product product = new Product(id);
//        return ResponseEntity.ok(product);
//    }
    
    @GetMapping("/getProducts/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Integer id) {
        Model2 model = model2Repository.findById(id).orElse(null);
        if (model == null) {
            return ResponseEntity.notFound().build();
        }

        // Assuming Product class has a constructor to accept necessary parameters or setters
        Product product = new Product();
        product.setproduct_id(id);
        product.setModel(model);
        product.setdiscounted_price((float) (model.getBasePrice() * 0.09)); // Example discount calculation
        product.setSeller(Seller); // Replace with actual seller information if available

        return ResponseEntity.ok(product);
    }


    @DeleteMapping("/{id}")
    public void deleteModel(@PathVariable Integer id) {
        model2Repository.deleteById(id);
    }
    
    
    
}
