import React, { useEffect, useState } from 'react';

const SellersData = () => {
  const [sellersData, setSellersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllSellers")
      .then(response => response.json())
      .then(data => setSellersData(data))
      .catch(error => console.error('Error fetching sellers data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Sellers Data</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Seller Id</th>
            <th>GST Number</th>
            <th>License ID</th>
            <th>Shop Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Area Name</th>
            <th>Address</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {sellersData.map(seller => (
            <tr key={seller.seller_id}>
              <td>{seller.seller_id}</td>
              <td>{seller.gst_no}</td>
              <td>{seller.license_id}</td>
              <td>{seller.shop_name}</td>
              <td>{seller.phone_no}</td>
              <td>{seller.email}</td>
              <td>{seller.user.username}</td>
              <td>{seller.area.area_name}</td>
              <td>{seller.address}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellersData;
