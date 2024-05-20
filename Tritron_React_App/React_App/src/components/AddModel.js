import React, { useState, useEffect } from 'react';
import '../CSS Files/AddModel.css';

const AddModel = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modelName, setModelName] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [requiredMessage, setRequiredMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/getAllBrands')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Error fetching brands:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/getAllCategories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleSave = () => {
    if (!selectedBrand || !selectedCategory || !modelName || !basePrice || !description) {
      setRequiredMessage('All fields are required');
      return;
    }

    fetch("http://localhost:8080/addModel", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        brandId: parseInt(selectedBrand),
        categoryId: parseInt(selectedCategory),
        modelName: modelName,
        basePrice: parseInt(basePrice),
        description: description
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setSuccessMessage('Model saved successfully');
      setErrorMessage('');
      setRequiredMessage('');
      console.log('Model saved successfully:', data);
    })
    .catch(error => {
      setErrorMessage('Error saving model. Please try again.');
      setSuccessMessage('');
      setRequiredMessage('');
      console.error('Error saving model:', error);
    });
  };

  return (
    <div className="add-model-container">
      <h2 className="add-model-heading">Add Model</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {requiredMessage && <div className="alert alert-warning">{requiredMessage}</div>}
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="brand" className="form-label">Select Brand:</label>
          <select
            className="form-control"
            id="brand"
            name="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            required
          >
            <option value="">Select Brand</option>
            {brands.map(brand => (
              <option key={brand.brand_id} value={brand.brand_id}>{brand.brand_name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Select Category:</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.categoryId} value={category.categoryId}>{category.category_Name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="modelName">Model Name:</label>
          <input
            type="text"
            id="modelName"
            className="form-control"
            value={modelName}
            onChange={e => setModelName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="basePrice">Base Price:</label>
          <input
            type="number"
            id="basePrice"
            className="form-control"
            value={basePrice}
            onChange={e => setBasePrice(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button className="btn-btn-primary-model" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddModel;
