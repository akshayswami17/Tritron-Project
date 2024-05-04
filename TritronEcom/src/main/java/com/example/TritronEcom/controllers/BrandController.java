package com.example.TritronEcom.controllers;



import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.services.BrandService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//
//@GetMapping("/{id}")
//public Brand getBrandById(@PathVariable Integer id) {
//  return brandService.getBrandById(id);
//}
//
//@PostMapping
//public Brand addBrand(@RequestBody Brand brand) {
//  return brandService.addBrand(brand);
//}
//
//@PutMapping("/{id}")
//public Brand updateBrand(@PathVariable Integer id, @RequestBody Brand brand) {
//  brand.setBrand_Id(id);
//  return brandService.updateBrand(brand);
//}
//
//@DeleteMapping("/{id}")
//public void deleteBrand(@PathVariable Integer id) {
//  brandService.deleteBrand(id);
//}




@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @GetMapping("/getAllBrands")
    public List<Brand> getAllBrands() {
        return brandService.getAllBrands();
    }
    
//  @PostMapping("/addBrand")
//  public Brand addBrand(@RequestBody Brand brand) {
//    return brandService.addBrand(brand);
//  }

}
