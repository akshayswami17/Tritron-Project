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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="consumer")
public class Consumer {

	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int consumer_id;
	
	@Column
	String first_name;
	
	@Column
	String last_name;
	
	@Column
	long phone_no;
	
	@Column
	String email;
	
	@Column
	String address;
	
	@ManyToOne
	@JoinColumn(name = "area_id")
	Area area;

	@OneToOne
	@JoinColumn(name = "user_id")
	User user;


	public Consumer() {
		super();
	}
	
	
	
	public Consumer(String first_name, String last_name, long phone_no, String email, String address,
			Area area, User user) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_no = phone_no;
		this.email = email;
		this.address = address;
		this.area = area;
		this.user = user;
	}



	public int getConsumer_id() {
		return consumer_id;
	}
	public void setConsumer_id(int consumer_id) {
		this.consumer_id = consumer_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public long getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
			
}
