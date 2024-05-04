package com.example.TritronEcom.entities;



import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "model")
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer model_Id;

    @Column(nullable = false, length = 255)
    private String model_Name;

    @Column(nullable = true, precision = 10, scale = 2)
    private BigDecimal basePrice;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = true)
    private Brand brand;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = true)
    private Category category;

	public Model() {
		super();
	}

	public Model(String model_Name, BigDecimal basePrice, String description, Brand brand, Category category) {
		super();
		this.model_Name = model_Name;
		this.basePrice = basePrice;
		this.description = description;
		this.brand = brand;
		this.category = category;
	}

	public Integer getModel_Id() {
		return model_Id;
	}

	public void setModel_Id(Integer model_Id) {
		this.model_Id = model_Id;
	}

	public String getModel_Name() {
		return model_Name;
	}

	public void setModel_Name(String model_Name) {
		this.model_Name = model_Name;
	}

	public BigDecimal getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(BigDecimal basePrice) {
		this.basePrice = basePrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
      
    
    

}
