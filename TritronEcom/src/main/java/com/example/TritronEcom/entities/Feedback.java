package com.example.TritronEcom.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="feedbacks")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int feedback_id;
@Column
private String username;
@Column    
private int ratings;
@Column    
private String comments;
public Feedback() {
	super();
}
public Feedback(String username, int ratings, String comments) {
	super();
	this.username = username;
	this.ratings = ratings;
	this.comments = comments;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public int getRatings() {
	return ratings;
}
public void setRatings(int ratings) {
	this.ratings = ratings;
}
public String getComments() {
	return comments;
}
public void setComments(String comments) {
	this.comments = comments;
}



}
