package com.example.TritronEcom.entities;



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
@Table(name = "brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer brand_Id;

    @Column(nullable = false, length = 255)
    private String brand_Name;

	public Brand() {
		super();
	}

	public Brand(String brand_Name) {
		super();
		this.brand_Name = brand_Name;
	}

	public Integer getBrand_Id() {
		return brand_Id;
	}

	public void setBrand_Id(Integer brand_Id) {
		this.brand_Id = brand_Id;
	}

	public String getBrand_Name() {
		return brand_Name;
	}

	public void setBrand_Name(String brand_Name) {
		this.brand_Name = brand_Name;
	}
	
    


}
