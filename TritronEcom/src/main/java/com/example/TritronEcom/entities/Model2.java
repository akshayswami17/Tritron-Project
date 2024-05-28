package com.example.TritronEcom.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "modelss")
public class Model2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "model_id")
    private Integer modelId;

    @Column(name = "base_price")
    private Integer basePrice;

    @Column(name = "description")
    private String description;

    @Column(name = "model_name")
    private String modelName;
    
//    @ManyToOne
//    @JoinColumn(name = "brand_id", nullable = false)
    @Column(name = "brand_id")
    private Integer brandId;

    @Column(name = "category_id")
    private Integer categoryId;

    public Model2() {
        // Default constructor
    }

    public Model2(Integer basePrice, String description, String modelName, Integer brandId, Integer categoryId) {
        this.basePrice = basePrice;
        this.description = description;
        this.modelName = modelName;
        this.brandId = brandId;
        this.categoryId = categoryId;
    }

    public Integer getModelId() {
        return modelId;
    }

    public void setModelId(Integer modelId) {
        this.modelId = modelId;
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

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public Integer getBrandId() {
        return brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    // Optionally, you can override toString(), hashCode(), and equals() methods
}
