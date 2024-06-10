import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/PaymentSuccess.css'; // Create and style this CSS file

const PaymentSuccess = () => {
  const [loading, setLoading] = useState(true);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate the delivery date, which is 5 days from the current date
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 5));
    setDeliveryDate(deliveryDate.toDateString());

    // Set a timer to switch from loading to success message after 30 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-payment-success">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h2 className="heading-payment-success">Payment Successful</h2>
          <p>Your payment was processed successfully. Thank you for your payment!</p>
          <p>Your order has been placed successfully.</p>
          <p>Estimated delivery date: {deliveryDate}</p>
          <button className="btn btn-primary" onClick={() => navigate('/consumer_home')}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
