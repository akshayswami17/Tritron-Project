package com.example.TritronEcom.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@ManyToOne
    @JoinColumn(name = "role_id")
	Role role;
	
	@Column
	boolean activation_status;

	public User() {
		super();
	}

	public User(String username, String password, Role role, boolean activation_status) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
		this.activation_status = activation_status;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public boolean isActivation_status() {
		return activation_status;
	}

	public void setActivation_status(boolean activation_status) {
		this.activation_status = activation_status;
	}


}
