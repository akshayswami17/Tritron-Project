
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (storedCart.length === 0) {
      return;
    }
    localStorage.removeItem("cart");
    setCart(storedCart);
  }, []);

  

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: "#007BFF" }}>
        Your Orders
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Model Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        
        <tbody>
  {cart.map((item) => (
    <tr key={item.pid}>
      <td>{item.pid}</td>
      <td>{item.model && item.model.model_Name}</td>
      <td>{item.qty}</td>
    </tr>
  ))}
</tbody>

      </table>
      <Link to="/trackorder" className="btn btn-success">
        Confirm Orders
      </Link>
      <Link to="/searchproducts" className="btn btn-primary">
        Back to Products
      </Link>
    </div>
  );
};

export default ConfirmOrder;
