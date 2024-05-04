import React, { useEffect, useState } from 'react';

const FeedbackComponent = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/getAllFeedbacks') // Replace with your Spring Boot app URL
      .then(response => response.json())
      .then(data => setFeedbackData(data))
      .catch(error => console.error('Error fetching feedback data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Feedback Data</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>User</th>
            <th>Product Name</th>
            <th></th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map(feedback => (
            <tr key={feedback.feedbackId}>
              <td>{feedback.user.username}</td>
              <td>{feedback.product.model.model_Name}</td>
              <td>{feedback.product.seller.shop_name}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackComponent;