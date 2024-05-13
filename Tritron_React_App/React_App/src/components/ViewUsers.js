import React, { useEffect, useState } from 'react';

const ViewUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllUsers")
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
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.username}</td>
              <td>{user.role ? user.role.r_name : 'No Role'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
