import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/PaymentOptions.css'; // Make sure to create and style this CSS file
import image1 from '../components/Images/phonepay.png';
import image2 from '../components/Images/goooglepay.png';
import image3 from '../components/Images/card.png';
import image4 from '../components/Images/cashondelivery.png';

const PaymentOptions = () => {
  const navigate = useNavigate();

  const handlePaymentMethodSelect = (method, path) => {
    localStorage.setItem('paymentMethod', method);
    navigate(path);
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container-payment-options">
      <h2 className="heading-payment-options">Choose Payment Method</h2>
      <div className="payment-methods">
        <div className="payment-method" onClick={() => handlePaymentMethodSelect('PhonePe', '/phonepepayment')}>
          <img src={image1} alt="PhonePe" className="payment-image" />
          <p>PhonePe</p>
        </div>
        <div className="payment-method">
          <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer">
            <img src={image2} alt="Google Pay" className="payment-image" />
          </a>
          <p>Google Pay</p>
        </div>
        <div className="payment-method">
          <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
            <img src={image3} alt="Card" className="payment-image" />
          </a>
          <p>Card</p>
        </div>
        <div className="payment-method">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={image4} alt="Cash on Delivery" className="payment-image" />
          </a>
          <p>Cash on Delivery</p>
        </div>
      </div>
      <button className="btn btn-outline-primary" onClick={handleBack}>Back</button>
      <button className="btn btn-secondary-paymentoptions" onClick={() => navigate('/user_data')}>View User Data</button>
    </div>
  );  
};

export default PaymentOptions;
