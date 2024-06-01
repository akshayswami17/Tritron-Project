package com.example.TritronEcom.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Product;
import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.repositories.UserRepository;



@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	public User getuser(String username, String password)
	{
		User u;
		Optional<User> ou= urepo.getUser(username, password);
		try 
		{
			u=ou.get();
		}
		catch(Exception e)
		{
			u=null;
		}
		return u;
	}
	
	public User save(User u)
	{
		return urepo.save(u);
	}
	
	 public List<User> getAllUsers() {
	        return urepo.findAll();
	    }
	 
	 
	 public User updateUser(Integer uid, User updatedUser) {
			return urepo.findById(uid).map(user -> {
				user.setUsername(updatedUser.getUsername());
				user.setPassword(updatedUser.getPassword());
//				user.setFirst_name(updatedUser.getFirst_name());
//				user.setLast_name(updatedUser.getLast_name());
//				user.setPhone_no(updatedUser.getPhone_no());
//				user.setEmail(updatedUser.getEmail());
				// Update other fields as necessary
				return urepo.save(user);
			}).orElseGet(() -> {
				updatedUser.setUid(uid);
				return urepo.save(updatedUser);
			});
		}

	
}
