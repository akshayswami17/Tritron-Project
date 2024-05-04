package com.example.TritronEcom.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.City;
import com.example.TritronEcom.entities.SellerRegistration;
import com.example.TritronEcom.repositories.AreaRepository;
import com.example.TritronEcom.repositories.CityRepository;

@Service
public class AreaService {
	
	@Autowired
	AreaRepository arepo;
	
	@Autowired
	CityRepository crepo;
	
	public List<Area> save(List<Area> a)
	{
		return arepo.saveAll(a);
	}

	public List<Area> getArea1(int cid)
	{
		City c = crepo.findById(cid).get();
     	return arepo.getAreas(c);
		//return arepo.findById(area_id).orElse(null);
		
	}
	
	public Area getArea(int aid)
	{
		return arepo.findById(aid).get();
	}
//	public List<Area> getAreasByCityId(int city_id) {
//        return arepo.findByCityId(city_id);
//	
//	}
}
