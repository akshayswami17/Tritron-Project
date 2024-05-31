import React, { useState, useEffect } from 'react';
import { useLocation ,useNavigate } from 'react-router-dom';
import '../CSS Files/PaymentProcess.css';
const PaymentProcess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  useEffect(() => {
    if (!product) {
      navigate("../showproductdetails"); // Redirect back if no product data
    }
  }, [product, navigate]);

 
  const handlePayment = () => {
    // Implement payment logic here
    navigate("../paymentoptions", { state: { product } });
    console.log('Processing payment for:', product);
  };

  if (!product || !product.model) {
    return <div>Loading...</div>; // Optional loading or redirect message
  }

  return (
    <div className="container-payprocess">
      <h2 className="mb-4 heading-payprocess">Payment Process</h2>
      <div>
        <h3>{product.model.modelName || 'Unknown Model'}</h3>
        <p>{product.model.description || 'No description available'}</p>
        <p><strong>Base Price:</strong> {product.model.basePrice || 'N/A'}</p>
        <p><strong>Discounted Price:</strong> {product.discounted_price}</p>
        <p><strong>Price to pay :</strong> {product.model.basePrice - product.discounted_price}</p>
        {/* <p><strong>Brand:</strong> {product.model.brand ? product.model.brand.brand_name : 'Unknown'}</p>
        <p><strong>Seller:</strong> {product.seller || 'Unknown'}</p> */}
        <button className="btn btn-success btn-payprocess" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentProcess;