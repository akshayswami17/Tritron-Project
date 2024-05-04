import React, { useState } from 'react';

const AddProductPage = () => {

  const [formData, setFormData] = useState({
    category: '',
    brandname: '',
    modelName: '',
    description: '',
    basePrice: '',
    discountedPrice: '',
    shopName: ''
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    const newValidationErrors = { ...validationErrors };

   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.values(validationErrors).some(error => error !== '')) {
      alert('Please fix the validation errors before submitting.');
      return;
    }

    try {
    
    } catch (error) {
      console.error('Error during add product:', error);
      alert('Error during add product. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select className="form-select" id="category" name="category" value={formData.category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="TV">TV</option>
            <option value="Mobile">Mobile</option>
            <option value="Tablet">Tablet</option>
            <option value="Laptop">Laptop</option>
            <option value="Other">Other</option>
          </select>
          {validationErrors.category && <div className="text-danger">{validationErrors.category}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="brandname" className="form-label">Brand Name</label>
          <select className="form-select" id="brandname" name="brandname" value={formData.brandname} onChange={handleInputChange}>
            <option value="">Select Brand</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="LG">LG</option>
            <option value="Google">Google</option>
            <option value="Sony">Sony</option>
            <option value="Oneplus">Oneplus</option>
            <option value="Amazon">Amazon</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Dell">Dell</option>
            <option value="HP">HP</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Other">Other</option>
          </select>
          {validationErrors.brandname && <div className="text-danger">{validationErrors.brandname}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="modelName" className="form-label">Model Name</label>
          <input type="text" className="form-control" id="modelName" name="modelName" value={formData.modelName} onChange={handleInputChange} />
          {validationErrors.modelName && <div className="text-danger">{validationErrors.modelName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
          {validationErrors.description && <div className="text-danger">{validationErrors.description}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="basePrice" className="form-label">Base Price</label>
          <input type="text" className="form-control" id="basePrice" name="basePrice" value={formData.basePrice} onChange={handleInputChange} />
          {validationErrors.basePrice && <div className="text-danger">{validationErrors.basePrice}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="discountedPrice" className="form-label">Discounted Price</label>
          <input type="text" className="form-control" id="discountedPrice" name="discountedPrice" value={formData.discountedPrice} onChange={handleInputChange} />
          {validationErrors.discountedPrice && <div className="text-danger">{validationErrors.discountedPrice}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="shopName" className="form-label">Shop Name</label>
          <input type="text" className="form-control" id="shopName" name="shopName" value={formData.shopName} onChange={handleInputChange} />
          {validationErrors.shopName && <div className="text-danger">{validationErrors.shopName}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;