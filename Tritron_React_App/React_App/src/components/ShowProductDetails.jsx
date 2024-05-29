import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = localStorage.getItem('searchedProducts');
    if (productData) {
      setProduct(JSON.parse(productData));
    }
  }, []);

  const handleProceedToPayment = () => {
    navigate("../paymentprocess", { state: { product } });
  };
//paymentprocess
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Details</h2>
      <div>
        <h3>{product.model ? product.model.modelName : 'Unknown Model'}</h3>
        <p>{product.model ? product.model.description : 'No description available'}</p>
        <p><strong>Base Price:</strong> {product.model ? product.model.basePrice : 'N/A'}</p>
        <p><strong>Discounted Price:</strong> {product.discounted_price}</p>
        <p><strong>Brand:</strong> {product.model && product.model.brand ? product.model.brand.brand_name : 'Unknown'}</p>
        <p><strong>Seller:</strong> {product.seller}</p>
        <button className="btn btn-primary" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ShowProductDetails;
