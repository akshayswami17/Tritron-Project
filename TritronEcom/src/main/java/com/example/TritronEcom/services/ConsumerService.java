package com.example.TritronEcom.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.Consumer;
import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.repositories.ConsumerRepository;

@Service
public class ConsumerService {

	@Autowired
	ConsumerRepository crepo;
	
	public Consumer saveConsumer(Consumer consumer)
	{
		return crepo.save(consumer);
		
	}
	
	 public List<Consumer> getAllConsumers() {
	        return crepo.findAll();
	    }
}
