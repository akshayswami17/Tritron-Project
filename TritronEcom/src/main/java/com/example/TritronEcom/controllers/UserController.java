package com.example.TritronEcom.controllers;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.entities.UserCheck;
import com.example.TritronEcom.repositories.UserRepository;
import com.example.TritronEcom.services.UserService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService uservice;
	private UserRepository userRepository;

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
	
	
	@PutMapping("/updateUser/{uid}")
	public User updateUser(@PathVariable Integer uid, @RequestBody User user) {
		return uservice.updateUser(uid, user);
	}
	
	@GetMapping("/getUser/{id}")
    public Optional<User> getUser(@PathVariable Integer id) {
        return uservice.getUserById(id);
    }
	
}
