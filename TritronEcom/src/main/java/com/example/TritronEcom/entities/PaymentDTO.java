package com.example.TritronEcom.entities;

public class PaymentDTO {
    private String name;
    private String phone;
    private String amount;
    private Integer userId;
	public PaymentDTO(String name, String phone, String amount, Integer userId) {
		super();
		this.name = name;
		this.phone = phone;
		this.amount = amount;
		this.userId = userId;
	}
	public PaymentDTO() {
		super();
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
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	

    // Getters and Setters
    
    
}
