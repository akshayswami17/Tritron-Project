package com.example.TritronEcom.services;

import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.repositories.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//
//public Brand updateBrand(Brand brand) {
//return brandRepository.save(brand);
//}
//
//public void deleteBrand(Integer id) {
//brandRepository.deleteById(id);
//}



@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    public Brand getBrandById(Integer id) {
        return brandRepository.findById(id).orElse(null);
    }
    
    public Brand addBrand(Brand brand) {
    	return brandRepository.save(brand);
    	}

}