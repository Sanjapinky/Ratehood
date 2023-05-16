package com.codecool.raterhood.service;

import com.codecool.raterhood.data.City;
import com.codecool.raterhood.repository.CityRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {
    @Autowired
    private CityRepository cityRepository;
    public List<City> getAllCities(){
        return cityRepository.findAll();
    }
    public Optional<City> singleCity(ObjectId id){
        return cityRepository.findById(id);
    }

}
