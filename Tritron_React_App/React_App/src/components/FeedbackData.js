import React, { useEffect, useState } from 'react';

const FeedbackData = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllFeedbacks") // Replace with your Spring Boot app URL
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
            <th>Feedback Id</th>
            <th>User</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map(feedback => (
            <tr key={feedback.feedback_id}>
              <td>{feedback.feedback_id}</td>
              <td>{feedback.username}</td>
              <td>{feedback.ratings}</td>
              <td>{feedback.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackData;
