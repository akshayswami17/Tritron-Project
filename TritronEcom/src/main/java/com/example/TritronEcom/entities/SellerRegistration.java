package com.example.TritronEcom.entities;





public class SellerRegistration {
	
	String username;
	
	String password;

	String gst_no;
	
	String license_id;
	
	String shop_name;
	
	long phone_no;
	
	String email;
	
	int area_id;
	
	String address;

	
	public SellerRegistration() {
		super();
	}

	public SellerRegistration(String username, String password, String gst_no, String license_id, String shop_name,
			long phone_no, String email,  int area_id, String address) {
		super();
		this.username = username;
		this.password = password;
		this.gst_no = gst_no;
		this.license_id = license_id;
		this.shop_name = shop_name;
		this.phone_no = phone_no;
		this.email = email;
		this.area_id=area_id;
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

	public String getGst_no() {
		return gst_no;
	}

	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}

	public String getLicense_id() {
		return license_id;
	}

	public void setLicense_id(String license_id) {
		this.license_id = license_id;
	}
	
	public String getShop_name() {
		return shop_name;
	}

	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
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
		return "SellerRegistration [username=" + username + ", password=" + password + ", gst_no=" + gst_no
				+ ", license_id=" + license_id + ", shop_name=" + shop_name + ", phone_no=" + phone_no + ", email="
				+ email + ", area_id=" + area_id + ", c_id=" + address + "]";
	}

	
	

}
