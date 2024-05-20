package com.example.TritronEcom.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "models")
public class Model2 {
// add model_Id as primary key and brand and cat
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "model_Id")
    private Integer modelId;

    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "model_name")
    private String modelName;

    @Column(name = "base_price")
    private Integer basePrice;

    @Column(name = "description")
    private String description;

	public Model2(Integer categoryId, String modelName, Integer basePrice, String description) {
		super();
		this.categoryId = categoryId;
		this.modelName = modelName;
		this.basePrice = basePrice;
		this.description = description;
	}

	public Model2() {
		super();
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public Integer getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(Integer basePrice) {
		this.basePrice = basePrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    // Getters and Setters
    // ...
    
    

}
