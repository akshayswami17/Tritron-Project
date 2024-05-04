package com.example.TritronEcom.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	SellerRepository srepo;
	
	public Seller saveSeller(Seller seller)
	{
		return srepo.save(seller);
		
	}
	
}
