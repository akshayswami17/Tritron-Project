import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS Files/ShowUsersData.css';

const ShowUsersData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    
    axios.get(`http://localhost:8080/api/getUser/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-user-data">
      <h2 className="heading-user-data">User Information</h2>
      <div className="user-details">
        <p><strong>First Name:</strong> {userData.firstName}</p>
        <p><strong>Last Name:</strong> {userData.lastName}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNo}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};

export default ShowUsersData;
