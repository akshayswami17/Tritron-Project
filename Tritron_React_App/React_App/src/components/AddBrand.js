import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddBrand.css';

const AddBrand = () => {
  const [brands, setBrands] = useState([]);
  const [brandName, setBrandName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/getAllBrands')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Error fetching brands:', error));
  }, []);
  
  const handleSave = () => {
    fetch('http://localhost:8080/addBrand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ brand_name: brandName }), 
    })
      .then(response => response.json())
      .then(data => {
        console.log('Brand saved successfully:', data);
        setSuccessMessage('Brand added successfully!');
      })
      .catch(error => {
        console.error('Error saving brand:', error);
      });
  };

  return (
    <div className="add-brand-container">
      <h2>Add Brand</h2>
      <input
        type="text"
        value={brandName}
        onChange={e => setBrandName(e.target.value)}
        placeholder="Enter brand name"
        className="form-control add-brand-input"
      />
      <button onClick={handleSave} className="btn btn-primary">Save</button>
      {successMessage && <p className="text-success">{successMessage}</p>}
    </div>
  );
};

export default AddBrand;
