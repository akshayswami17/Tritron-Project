package com.example.TritronEcom.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	SellerRepository srepo;
	
	public Seller saveSeller(Seller seller)
	{
		return srepo.save(seller);
		
	}
	
	 public List<Seller> getAllSellers() {
	        return srepo.findAll();
	    }
	
}
