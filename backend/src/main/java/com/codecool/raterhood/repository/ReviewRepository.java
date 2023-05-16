package com.codecool.raterhood.repository;

import com.codecool.raterhood.data.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepository extends MongoRepository<Review, ObjectId>{

}