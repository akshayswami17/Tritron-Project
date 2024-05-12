import React, { useEffect, useState } from 'react';

const ViewUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllUsers") // Replace with your Spring Boot app URL
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Users</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>Role</th>
            <th>Role</th>
            {/* <th>Role ID</th> */}
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {userData.map(users => (
            <tr key={users.uid}>
              <td>{users.uid}</td>
              <td>{users.username}</td>
              <td>{users.roles ? users.roles.r_name : 'No Role'}</td>
              <td>{users.r_name}</td>
              {/* <td>{users.roles ? users.roles.role_id : 'No Role'}</td> */}
              {/* Check if roles exist before accessing r_name */}
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
