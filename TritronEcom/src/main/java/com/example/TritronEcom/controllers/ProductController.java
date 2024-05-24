package com.example.TritronEcom.controllers;




import com.example.TritronEcom.entities.Area;

import com.example.TritronEcom.entities.Model2;
import com.example.TritronEcom.entities.Product;
import com.example.TritronEcom.entities.Role;
import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.entities.SellerRegistration;
import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.services.Model2Service;
import com.example.TritronEcom.services.Model2Service;
import com.example.TritronEcom.services.ProductService;
import com.example.TritronEcom.services.SellerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//@PostMapping
//public Product addProduct(@RequestBody Product product) {
//  return productService.addProduct(product);
//}
//
//@PutMapping("/{id}")
//public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
//  product.setProduct_Id(id);
//  return productService.updateProduct(product);
//}
//
//@DeleteMapping("/{id}")
//public void deleteProduct(@PathVariable Long id) {
//  productService.deleteProduct(id);
//}
//
//@PostMapping("/{id}/discount")
//public Product applyDiscount(@PathVariable Long id, @RequestBody BigDecimal discount) {
//  return productService.applyDiscount(id, discount);
//}
import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @Autowired
    private Model2Service modelService;
    
    @Autowired
    SellerService sellerService;
    
    

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/getProduct")
    public Product getProductById(@PathVariable int pid) {
        return productService.getProductById(pid);
    }
    
//    @GetMapping("/getProducts")
//    public List<Product> getProductsByModel_Id(@RequestParam int mid) {
//        return productService.getProductsByModel1(mid);
//    }
//    @GetMapping("/getProducts")
//    public List<Product> getProductsByModel_Id(@RequestParam("id") int mid) {
//    	System.out.println(mid);
//      return productService.getProductsByModel1(mid);
//    }
    
    /*public Model getModelByProductId(int pid) {
    	
    }*/

//    @PutMapping("/updateDiscountedPrice")
//    public int updateDiscountedPrice(@RequestBody InsertDiscountedPrice idp) {
//    	//Product p = productService.getProductById(idp.getPid());
//    	
//    	Model m = modelService.getModelById(idp.getMid());
//    	Seller s = sellerService.getSeller(idp.getSid());
//    	
//        return productService.updateDiscountedPrice(s, m , idp.getDp());
//    }
    
    
    
    @GetMapping("/product/{proid}")
    public Product getProductByProductId(@PathVariable("proid") int pid) {
    	return productService.getProductById(pid);
    }
    
    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
    
    
    

}