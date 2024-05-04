package com.example.TritronEcom.services;



import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.Brand;
import com.example.TritronEcom.entities.Category;
import com.example.TritronEcom.entities.City;
import com.example.TritronEcom.entities.Model;
import com.example.TritronEcom.entities.Product;
import com.example.TritronEcom.repositories.BrandRepository;
import com.example.TritronEcom.repositories.CategoryRepository;
import com.example.TritronEcom.repositories.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
//public Model addModel(Model model) {
//return modelRepository.save(model);
//}
//
//public Model updateModel(Model model) {
//return modelRepository.save(model);
//}
//
//public void deleteModel(Integer id) {
//modelRepository.deleteById(id);
//}
//
//public List<Model> getModelsByBrandId(Integer brandId) {
//return modelRepository.findByBrandId(brandId);
//}
//
//public List<Model> getModelsByCategoryId(Integer categoryId) {
//return modelRepository.findByCategoryId(categoryId);
//}
//
//public List<Model> getModelsByBasePriceGreaterThanEqual(BigDecimal price) {
//return modelRepository.findByBasePriceGreaterThanEqual(price);
//}



@Service
public class ModelService {

    @Autowired
    private ModelRepository modelRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private BrandRepository brandRepository;
    
    
    public List<Model> save(List<Model> a)
	{
		return modelRepository.saveAll(a);
	}

    
    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }


	public List<Model> getModel1(int cg, int br)
	{
		Category ct = categoryRepository.findById(cg).get();
		Brand bn = brandRepository.findById(br).get();
     	return modelRepository.getModelsByCategoryAndBrand(ct,bn);
	}
	
	public Model getModelById(int mid)
	{
		return modelRepository.findById(mid).get();
	}


	public List<Product> getModel1() {
		return null;
	}




//	public List<Product> getMode(int mid) {
//		return ;
//	}

}
