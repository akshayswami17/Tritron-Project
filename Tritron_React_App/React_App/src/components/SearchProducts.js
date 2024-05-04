import React, { useState } from 'react';
import './SearchProducts.css';

const ProductSelector = () => {
  // Sample data for electronic products
  const categories = ['Mobile Phones', 'Laptops', 'Tablets', 'Headphones', 'Smart Watches'];
  const models = {
    'Mobile Phones': ['iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus', 'Xiaomi'],
    'Laptops': ['MacBook', 'Dell XPS', 'HP Spectre', 'Microsoft Surface', 'Lenovo ThinkPad'],
    'Tablets': ['iPad', 'Samsung Galaxy Tab', 'Microsoft Surface Pro', 'Amazon Fire', 'Lenovo Tab'],
    'Headphones': ['AirPods', 'Sony WH-1000XM4', 'Bose QuietComfort', 'Jabra Elite', 'Sennheiser Momentum'],
    'Smart Watches': ['Apple Watch', 'Samsung Galaxy Watch', 'Fitbit Versa', 'Garmin Forerunner', 'Huawei Watch']
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedModel, setSelectedModel] = useState(models[categories[0]][0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedModel(models[event.target.value][0]);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleShowProducts = () => {
    // Here, you can perform any action you want when the button is clicked,
    // such as displaying the selected products.
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Model:', selectedModel);
  };

  return (
    <div className='product-selector-container'>
      <label htmlFor="categorySelect">Category:</label>
      <select className='select-dropdown' id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <br />
      <label htmlFor="modelSelect">Model:</label>
      <select className='select-dropdown' id="modelSelect" value={selectedModel} onChange={handleModelChange}>
        {models[selectedCategory].map((model, index) => (
          <option key={index} value={model}>{model}</option>
        ))}
      </select>
      <br />
      <button onClick={handleShowProducts}>Show Selected Product</button>
    </div>
  );
};

export default ProductSelector;
