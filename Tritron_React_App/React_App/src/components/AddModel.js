import React, { useState, useEffect } from 'react';

const AddModel = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modelName, setModelName] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/getAllBrands')
      .then(response => response.json())
      .then(data => {
        setBrands(data);
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/getAllCategories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSave = () => {

    /*int brand_id;
	int model_id;
	int category_id;
	String model_name;
	float base_price;
	String description;*/
    const modelData = {
      brand_id: selectedBrand,
      category_id: selectedCategory,
      model_name: modelName,
      base_price: basePrice,
      description: description
    };

    fetch('http://localhost:8080/addModel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modelData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Model saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving model:', error);
      });
  };

  return (
    <div>
      <h2>Add Model</h2>
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
      <div className="form-group">
        <label htmlFor="modelName">Model Name:</label>
        <input type="text" id="modelName" className="form-control" value={modelName} onChange={e => setModelName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="basePrice">Base Price:</label>
        <input type="number" id="basePrice" className="form-control" value={basePrice} onChange={e => setBasePrice(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddModel;
