package com.example.TritronEcom.controllers;



import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.entities.InsertBrand;
import com.example.TritronEcom.repositories.BrandRepository;
import com.example.TritronEcom.services.BrandService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BrandController {

    @Autowired
    private BrandService brandService;

//    @Autowired
//    private BrandRepository brandRepository;
    
    @GetMapping("/getAllBrands")
    public List<Brand> getAllBrands() {
        return brandService.getAllBrands();
    }


    
  @PostMapping("/addBrand")
  public Brand createBrand( @RequestBody Brand brand) {
      Brand b=new Brand (brand.getBrand_name());
      
      return brandService.addBrand(b);
  }

  
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

  //@GetMapping("/{id}")
  //public Brand getBrandById(@PathVariable Integer id) {
  //  return brandService.getBrandById(id);
  //}
  //
  
    
//  @PostMapping("/addBrand")
//  public Brand addBrand(@RequestBody Brand brand) {
//    return brandService.addBrand(brand);
//  }
}