package com.example.TritronEcom.entities;



import java.time.LocalDate;

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
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_Id;

    @ManyToOne
    @JoinColumn(name = "consumer_id")
    private Consumer consumer;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "date_of_order")
    private LocalDate dateOfOrder;

	public Order() {
		super();
	}

	public Order(Consumer consumer, Product product, LocalDate dateOfOrder) {
		super();
		this.consumer = consumer;
		this.product = product;
		this.dateOfOrder = dateOfOrder;
	}

	public Long getOrder_Id() {
		return order_Id;
	}

	public void setOrder_Id(Long order_Id) {
		this.order_Id = order_Id;
	}

	public Consumer getConsumer() {
		return consumer;
	}

	public void setConsumer(Consumer consumer) {
		this.consumer = consumer;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public LocalDate getDateOfOrder() {
		return dateOfOrder;
	}

	public void setDateOfOrder(LocalDate dateOfOrder) {
		this.dateOfOrder = dateOfOrder;
	}

	
}
