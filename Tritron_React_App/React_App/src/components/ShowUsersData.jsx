import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS Files/ShowUsersData.css'; // Make sure to create and style this CSS file

const ShowUsersData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace 'user-id' with the actual user ID if necessary or obtain it dynamically
    const userId = localStorage.getItem('userId');
    
    axios.get(`http://localhost:8080/getUser/${userId}`)
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
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};

export default ShowUsersData;
