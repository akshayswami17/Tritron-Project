package com.example.TritronEcom.controllers;

import com.example.TritronEcom.entities.Model2;
import com.example.TritronEcom.repositories.Model2Repository;
import com.example.TritronEcom.services.Model2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Model2Controller {

    @Autowired
    private Model2Service model2Service;

    @Autowired
    private Model2Repository model2Repository;

    @PostMapping("/addModel")
    public ResponseEntity<Model2> addModel(@RequestBody Model2 model) {
        Model2 savedModel = model2Service.addModel(model);
        return ResponseEntity.ok(savedModel);
    }

    @GetMapping("/getAllModels")
    public List<Model2> getAllModels() {
        return model2Service.getAllModels();
    }

    @GetMapping("/getProducts/{id}")
    public Model2 getModelById(@PathVariable Integer id) {
        return model2Repository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteModel(@PathVariable Integer id) {
        model2Repository.deleteById(id);
    }
}
