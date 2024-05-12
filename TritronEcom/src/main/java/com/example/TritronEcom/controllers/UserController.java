package com.example.TritronEcom.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.entities.UserCheck;
import com.example.TritronEcom.services.UserService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService uservice;

	@PostMapping("/checkUser")
	public User checkUser(@RequestBody UserCheck ucheck)
	{
		return uservice.getuser(ucheck.getUsername(), ucheck.getPassword());
		
		
		
	}
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers()
	{
		return uservice.getAllUsers();
	}
	
}
