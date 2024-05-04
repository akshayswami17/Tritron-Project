package com.example.TritronEcom.entities;



public class ProductView {

	Long product_id;
	float discounted_price;
	int seller_id;
	int model_id;
	String model_name;
	int brand_id;
	int category_id; 
	float base_price; 
	String description;
	
	public ProductView() {
		super();
	}

	public ProductView(float discounted_price, int seller_id, int model_id, String model_name, int brand_id,
			int category_id, float base_price, String description) {
		super();
		this.discounted_price = discounted_price;
		this.seller_id = seller_id;
		this.model_id = model_id;
		this.model_name = model_name;
		this.brand_id = brand_id;
		this.category_id = category_id;
		this.base_price = base_price;
		this.description = description;
	}

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}

	public float getDiscounted_price() {
		return discounted_price;
	}

	public void setDiscounted_price(float discounted_price) {
		this.discounted_price = discounted_price;
	}

	public int getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(int seller_id) {
		this.seller_id = seller_id;
	}

	public int getModel_id() {
		return model_id;
	}

	public void setModel_id(int model_id) {
		this.model_id = model_id;
	}

	public String getModel_name() {
		return model_name;
	}

	public void setModel_name(String model_name) {
		this.model_name = model_name;
	}

	public int getBrand_id() {
		return brand_id;
	}

	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public float getBase_price() {
		return base_price;
	}

	public void setBase_price(float base_price) {
		this.base_price = base_price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
}
