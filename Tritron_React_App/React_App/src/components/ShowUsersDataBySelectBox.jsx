//ShowUsersDataBySelectBox


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS Files/ShowUsersDataBySelectBox.css';

const ShowUsersDataBySelectBox = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const fetchUserData = (id) => {
    axios.get(`http://localhost:8080/getUser/${id}`)
      .then((response) => {
        setUserData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setError('Error in server side');
        setUserData(null);
      });
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  return (
    <div className="container-user-data">
      <h2 className="heading-user-data">User Information</h2>
      <div className="user-selection">
        <label htmlFor="userId">Select User ID: </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
        <button onClick={() => fetchUserData(userId)}>Fetch User Data</button>
      </div>
      {error && <div>{error}</div>}
      {userData && (
        <div className="user-details">
          <p><strong>First Name:</strong> {userData.firstName || "Error in server side"}</p>
          <p><strong>Last Name:</strong> {userData.lastName || "Error in server side"}</p>
          <p><strong>Email:</strong> {userData.email || "Error in server side"}</p>
          <p><strong>Phone Number:</strong> {userData.phoneNo || "Error in server side"}</p>
          <p><strong>Address:</strong> {userData.address || "Error in server side"}</p>
          {/* Add more fields as necessary */}
        </div>
      )}
    </div>
  );
};

export default ShowUsersDataBySelectBox;
