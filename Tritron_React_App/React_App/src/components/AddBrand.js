import React, { useReducer, useState } from 'react';
import '../CSS Files/AddBrand.css';

const AddBrandForm = () => {
  const init = {
    brand_name: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.value };
      case 'reset':
        return init;
      default:
        return state;
    }
  };

  const [brand, dispatch] = useReducer(reducer, init);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand.brand_name) {
      setErrorMsg('Brand name is required');
      return;
    }

    fetch("http://localhost:8080/addBrand", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brand),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSuccessMsg('Brand added successfully!');
          dispatch({ type: 'reset' });
        } else {
            setErrorMsg('Failed to add brand');
        }
      })
      .catch(error => {
        console.error('Error adding brand:', error);
        setErrorMsg('Error adding brand');
      });
  };

  const handleClear = () => {
    dispatch({ type: 'reset' });
    setErrorMsg('');
    setSuccessMsg('');
  };

  return (
    <div className="add-brand-container">
      <h1 className='add-brand-heading'>Add Brand</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand_name" className="form-label">Brand Name:</label>
          <input 
            type="text" 
            className="form-control" 
            id="brand_name" 
            name="brand_name"
            value={brand.brand_name}
            onChange={(e) => dispatch({ type: 'update', field: 'brand_name', value: e.target.value })}
            required
          />
          {errorMsg && <div className="error-msg" style={{ color: 'red' }}>{errorMsg}</div>}
          {successMsg && <div className="success-msg" style={{ color: 'green' }}>{successMsg}</div>}
        </div>
        <div className="form-actions">
            <div className="form-row-brand">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary brand-but" onClick={handleClear}>Clear</button>
        </div>
        
        </div>
      </form>
    </div>
  );
};

export default AddBrandForm;
