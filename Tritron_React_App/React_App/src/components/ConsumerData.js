import React, { useEffect, useState } from 'react';

const ConsumerData = () => {
  const [consumerData, setConsumerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllConsumers") // Replace with your Spring Boot app URL
      .then(response => response.json())
      .then(data => setConsumerData(data))
      .catch(error => console.error('Error fetching consumer data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Consumer Data</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Consumer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Area Name</th>
            <th>Address</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {consumerData.map(consumer => (
            <tr key={consumer.consumer_id}>
              <td>{consumer.consumer_id}</td>
              <td>{consumer.first_name}</td>
              <td>{consumer.last_name}</td>
              <td>{consumer.phone_no}</td>
              <td>{consumer.email}</td>
              <td>{consumer.user.username}</td>
              <td>{consumer.area.area_name}</td>
              <td>{consumer.address}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerData;
