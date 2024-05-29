import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentProcess = () => {
  const location = useLocation();
  const { product } = location.state;

  const handlePayment = () => {
    // Implement payment logic here
    console.log('Processing payment for:', product);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Payment Process</h2>
      <div>
        <h3>{product.modelName}</h3>
        <p>{product.description}</p>
        <p><strong>Base Price:</strong> {product.basePrice}</p>
        <p><strong>Brand:</strong> {product.brand ? product.brand.brand_name : 'Unknown'}</p>
        <button className="btn btn-success" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentProcess;
