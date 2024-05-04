package com.example.TritronEcom.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.City;
import com.example.TritronEcom.repositories.CityRepository;

@Service
public class CityService {
	
	@Autowired
	CityRepository cyrepo;
	
	public City getCity(int city_id)
	{
		
		return cyrepo.findById(city_id).get();
	}
	
	public List<City> getAll(){
		return cyrepo.findAll();
	}
	

}
