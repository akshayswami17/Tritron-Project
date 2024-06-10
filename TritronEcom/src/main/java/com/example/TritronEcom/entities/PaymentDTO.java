package com.example.TritronEcom.entities;

public class PaymentDTO {
    private String name;
    private String phone;
    private String amount;
    private Integer userId;
    private String paymentMethod;
	public PaymentDTO(String name, String phone, String amount, Integer userId,String paymentMethod) {
		super();
		this.name = name;
		this.phone = phone;
		this.amount = amount;
		this.userId = userId;
		this.paymentMethod = paymentMethod;
		
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
	public Object getPaymentMethod() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

    // Getters and Setters
    
    
}
