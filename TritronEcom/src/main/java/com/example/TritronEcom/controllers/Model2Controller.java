package com.example.TritronEcom.controllers;

import com.example.TritronEcom.entities.Model2;
import com.example.TritronEcom.services.Model2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController

public class Model2Controller {

    @Autowired
    private Model2Service model2Service;

    @PostMapping("/addModel")
    public ResponseEntity<Model2> addModel(@RequestBody Model2 model) {
        Model2 savedModel = model2Service.addModel(model);
        return ResponseEntity.ok(savedModel);
    }
}
