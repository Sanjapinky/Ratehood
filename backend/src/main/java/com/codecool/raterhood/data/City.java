package com.codecool.raterhood.data;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "cities")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class City {
    @Id
    private ObjectId id;
    private String country;
    private String name;
    private String lat;
    private String lng;
    @DocumentReference
    private List<Review>  reviewIds;
}
