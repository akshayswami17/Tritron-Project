package com.example.TritronEcom.entities;





import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;



/*@Data
@AllArgsConstructor
@NoArgsConstructor*/

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int product_id;

    @ManyToOne
    @JoinColumn(name = "model_id")
    private Model2 model;

    @Column(name = "discounted_price")
    private float discounted_price;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Seller seller;

	public Product() {
		super();
	}

	public Product(Model2 model, float discounted_price, Seller seller) {
		super();
		this.model = model;
		this.discounted_price = discounted_price;
		this.seller = seller;
	}

	public int getproduct_id() {
		return product_id;
	}

	public void setproduct_id(int product_id) {
		this.product_id = product_id;
	}

	public Model2 getModel() {
		return model;
	}

	public void setModel(Model2 model) {
		this.model = model;
	}

	public float getdiscounted_price() {
		return discounted_price;
	}

	public void setdiscounted_price(float discounted_price) {
		this.discounted_price = discounted_price;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}
    
    
    
}
