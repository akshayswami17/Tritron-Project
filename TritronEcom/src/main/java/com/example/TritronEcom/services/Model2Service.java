package com.example.TritronEcom.services;

import com.example.TritronEcom.entities.Model2;
import com.example.TritronEcom.repositories.Model2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Model2Service {

    @Autowired
    private Model2Repository model2Repository;

    public Model2 addModel(Model2 model) {
        return model2Repository.save(model);
    }
}
