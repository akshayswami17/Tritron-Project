package com.example.TritronEcom.entities;



public class ConsumerRegistration {

	
	String username;
	
	String password;

	String first_name;
	
	String last_name;
	
	long phone_no;
	
	String email;
	
	int area_id;
	
	String address;


	
	public ConsumerRegistration() {
		super();
	}


	public ConsumerRegistration(String username, String password, String first_name, String last_name, long phone_no,
			String email, int area_id, String address) {
		super();
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_no = phone_no;
		this.email = email;
		this.area_id = area_id;
		this.address = address;
	}

	


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
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



	public int getArea_id() {
		return area_id;
	}


	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "ConsumerRegistration [username=" + username + ", password=" + password + ", first_name=" + first_name
				+ ", last_name=" + last_name + ", phone_no=" + phone_no + ", email=" + email + ", area_id=" + area_id
				+ ", address=" + address + "]";
	}


	
}