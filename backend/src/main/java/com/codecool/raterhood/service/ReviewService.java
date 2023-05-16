package com.codecool.raterhood.service;

import com.codecool.raterhood.data.City;
import com.codecool.raterhood.data.Review;
import com.codecool.raterhood.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String id){
        Review review = reviewRepository.insert(new Review(reviewBody)) ;
        reviewRepository.insert(review);

        mongoTemplate.update(City.class)
                .matching(Criteria.where("id").is(id))
                .apply(new Update().push("reviewIds").value(review));
        return review;
    }
}
