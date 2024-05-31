import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/PaymentOptions.css'; // Make sure to create and style this CSS file

const PaymentOptions = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container-payment-options">
      <h2 className="heading-payment-options">Choose Payment Method</h2>
      <div className="payment-methods">
        <div className="payment-method">
          <img src="../Images/phonepay.png" alt="PhonePe" className="payment-image" />
          <p>PhonePe</p>
        </div>
        <div className="payment-method">
          <img src="../Images/goooglepay.png" alt="Google Pay" className="payment-image" />
          <p>Google Pay</p>
        </div>
        <div className="payment-method">
          <img src="../Images/card.png" alt="Card" className="payment-image" />
          <p>Card</p>
        </div>
        <div className="payment-method">
          <img src="../Images/cashondelivery.png" alt="Cash on Delivery" className="payment-image" />
          <p>Cash on Delivery</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleBack}>Back</button>
    </div>
  );
};

export default PaymentOptions;
