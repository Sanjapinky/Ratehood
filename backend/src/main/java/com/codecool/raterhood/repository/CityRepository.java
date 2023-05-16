package com.codecool.raterhood.repository;

import com.codecool.raterhood.data.City;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends MongoRepository<City, ObjectId> {
}
