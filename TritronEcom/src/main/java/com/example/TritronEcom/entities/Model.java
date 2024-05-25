//package com.example.TritronEcom.entities;
//
//import java.math.BigDecimal;
//
//import org.antlr.v4.runtime.misc.NotNull;
//
//import jakarta.persistence.*;
//
//
//@Entity
//public class Model {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @NotNull
//    @Column(name = "modelName")
//    private String modelName;
//
//    @NotNull
//    private Integer brandId;
//
//    @NotNull
//    private Integer categoryId;
//
//    @NotNull
//    private Integer basePrice;
//
//    @NotNull
//    private String description;
//
//    // Getters and setters
//
//
//
//    public Model() {
//        super();
//    }
//
//    
//
//	public Model(String modelName, Integer brandId, Integer categoryId, Integer basePrice, String description) {
//		super();
//		this.modelName = modelName;
//		this.brandId = brandId;
//		this.categoryId = categoryId;
//		this.basePrice = basePrice;
//		this.description = description;
//	}
//
//	public Integer getId() {
//		return id;
//	}
//
//	public void setId(Integer id) {
//		this.id = id;
//	}
//
//	public String getModelName() {
//		return modelName;
//	}
//
//	public void setModelName(String modelName) {
//		this.modelName = modelName;
//	}
//
//	public Integer getBrandId() {
//		return brandId;
//	}
//
//	public void setBrandId(Integer brandId) {
//		this.brandId = brandId;
//	}
//
//	public Integer getCategoryId() {
//		return categoryId;
//	}
//
//	public void setCategoryId(Integer categoryId) {
//		this.categoryId = categoryId;
//	}
//
//	public Integer getBasePrice() {
//		return basePrice;
//	}
//
//	public void setBasePrice(Integer basePrice) {
//		this.basePrice = basePrice;
//	}
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	
//
//    // Getters and Setters
//   
//}
