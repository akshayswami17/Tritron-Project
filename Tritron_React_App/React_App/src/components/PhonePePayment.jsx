import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/PhonePePayment.css'; // Make sure to create and style this CSS file

const PhonePePayment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: '',
  });

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
    // Handle form submission logic here
  };

  return (
    <div className="container-phonepe-payment">
      <h2 className="heading-phonepe-payment">PhonePe Payment</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PhonePePayment;
