package com.example.TritronEcom.repositories;





import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.entities.Category;
import com.example.TritronEcom.entities.Model;
import com.example.TritronEcom.entities.Product;
import com.example.TritronEcom.entities.Seller;

import jakarta.transaction.Transactional;

import java.math.BigDecimal;
import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product ,Integer> {
 	//@Query("Select p, m from Product p, Model m  where p.model = m.model_Id")
	@Query("select p from Product p where p.model = :m")
 	public List<Product> getProductsByModel(Model m);

    
    @Modifying
    @Query("UPDATE Product p SET p.discounted_price = :discountedPrice WHERE p.model = :m and p.seller = :s")
    int updateDiscountedPrice(float discountedPrice, Model m, Seller s);

    
    
    
    
    
    
//    @Modifying
//    @Query("UPDATE Product p SET p.discounted_price = :discountedPrice WHERE p.product_id = :productId")
//    int updateDiscountedPrice(@Param("product_id") int productId, @Param("discounted_price") float discountedPrice);
}
