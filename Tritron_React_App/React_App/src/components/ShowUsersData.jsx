import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS Files/ShowUsersData.css';

const ShowUsersData = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    
    if (userId) {
      axios.get(`http://localhost:8080/getUser/${userId}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setError('Error in server side');
        });
    } else {
      setError('User ID not found in local storage');
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-user-data">
      <h2 className="heading-user-data">User Information</h2>
      <div className="user-details">
        <p><strong>First Name:</strong> {userData.firstName || "Error in server side"}</p>
        <p><strong>Last Name:</strong> {userData.lastName || "Error in server side"}</p>
        <p><strong>Email:</strong> {userData.email || "Error in server side"}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNo || "Error in server side"}</p>
        <p><strong>Address:</strong> {userData.address || "Error in server side"}</p>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};

export default ShowUsersData;
