import React, { useEffect, useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getAllOrders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Feedback Data</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Consumer Name</th>
            <th>Product Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_Id}>
              <td>{order.order_Id}</td>
              <td>{order.consumer.first_name}</td>
              <td>{order.product.model.model_Name}</td>
              <td>{order.dateOfOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
