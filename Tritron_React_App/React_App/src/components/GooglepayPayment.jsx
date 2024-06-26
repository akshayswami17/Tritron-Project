import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS Files/PhonePePayment.css'; // Make sure to create and style this CSS file

const GooglepayPayment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    phone: '',
    amount: '',
    paymentMethod: '',
  });

  useEffect(() => {
    const paymentMethod = localStorage.getItem('paymentMethod');
    if (paymentMethod) {
      setFormData((prevData) => ({
        ...prevData,
        paymentMethod,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', formData);
    axios.post("http://localhost:8080/api/savePayment", formData)
    .then(response => {
        console.log('Payment saved successfully:', response.data);
        navigate('/paymentsuccess'); // Navigate to the PaymentSuccess component
      })
      .catch(error => {
        console.error('Error saving payment:', error);
      });
  };

  return (
    <div className="bg-google-payment">
    <div className="container-googlepay-payment">
      <h2 className="heading-phonepe-payment">Googlepay Payment</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">Pay</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
      </form>
    </div>
    </div>
  );
};

export default GooglepayPayment;
