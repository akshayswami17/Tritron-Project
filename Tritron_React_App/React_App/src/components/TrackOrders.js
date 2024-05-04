import React from "react";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: "#007BFF" }}>
        Order Placed Successfully
      </h2>
      <p>Your order has been successfully placed. Thank you for shopping with us!</p>
      {/* <button className="btn btn-success"> */}
        {/* In a real scenario, this button would trigger the transition to "Order Shipped" UI */}
        {/* <Link to="/ordershipped" style={{ color: "white", textDecoration: "none" }}>
          Order Shipped (Simulated)
        </Link>
      </button> */}
    </div>
  );
};

export default OrderPlaced;
