package com.example.TritronEcom.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Entity
@Table(name = "brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="brand_id")
    private int brand_id;

    @Column(name="brand_name")
    private String brand_name;

	public Brand(String brand_name) {
		super();
		this.brand_name = brand_name;
	}

	public Brand() {
		super();
	}

	public Brand(int brand_id, String brand_name) {
		super();
		this.brand_id = brand_id;
		this.brand_name = brand_name;
	}

	public int getBrand_id() {
		return brand_id;
	}

	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}

	public String getBrand_name() {
		return brand_name;
	}

	public void setBrand_name(String brand_name) {
		this.brand_name = brand_name;
	}



}