package com.example.TritronEcom.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

//Payment.java




@Entity
public class Payment {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer id;
 private String name;
 private String phone;
 private String amount;

 @ManyToOne
 @JoinColumn(name = "user_id")
 private User user;
 
 

public Payment() {
	super();
}

public Payment(String name, String phone, String amount, User user) {
	super();
	this.name = name;
	this.phone = phone;
	this.amount = amount;
	this.user = user;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getPhone() {
	return phone;
}

public void setPhone(String phone) {
	this.phone = phone;
}

public String getAmount() {
	return amount;
}

public void setAmount(String amount) {
	this.amount = amount;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}

 // Getters and Setter
 
}

