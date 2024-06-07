import React, { useState } from 'react';
import '../CSS Files/AddToCart.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const AddToCart = ({ productName, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart(productName, quantity, color, size);
    // navigate('/confirmOrder');
  };

  return (
    <div className="add-to-cart-container">
      <div className="product-details">
        <h3>{productName}</h3>
      </div>
      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      <div className="color-selector">
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div className="size-selector">
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          value={size}
          onChange={handleSizeChange}
        />
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
