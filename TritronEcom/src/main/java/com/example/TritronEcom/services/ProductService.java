package com.example.TritronEcom.services;





import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.entities.Category;
import com.example.TritronEcom.entities.City;
import com.example.TritronEcom.entities.Model2;
import com.example.TritronEcom.entities.Product;
import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.repositories.Model2Repository;
import com.example.TritronEcom.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.*;
import java.util.List;

//
//public void deleteProduct(int id) {
//  productRepository.deleteById(id);
//}

//public Product updateProductOffer(Product product) {
//return productRepository.save(product);
//}

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private Model2Repository modelRepository;
    
    

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int pid) {
        return productRepository.findById(pid).orElse(null);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
    
//    public List<Product> getProductsByModel1(int id)
//	{
//    	Model m = modelRepository.findById(id).get();
//    	System.out.println(m);
//    	return productRepository.getProductsByModel(m);		
//	}
    
    
    public int updateDiscountedPrice(Seller s, Model2 m, float discountedPrice) {
        return productRepository.updateDiscountedPrice(discountedPrice, m , s);
    }
   
    
   

    

}