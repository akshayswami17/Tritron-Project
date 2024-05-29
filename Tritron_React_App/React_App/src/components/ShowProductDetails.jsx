import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/ShowProductDetails.css';

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-showproductdetails">
      <h2 className="mb-4 heading-showproductdetails">Product Details</h2>
      <img src={product.imageUrl} alt={product.model ? product.model.modelName : 'Product Image'} className="product-image" />
      <div>
        <h3><strong>Model Name :</strong> {product.model ? product.model.modelName : 'Unknown Model'}</h3>
        <p><strong>Description :</strong>{product.model ? product.model.description : 'No description available'}</p>
        <p><strong>Base Price :</strong> {product.model ? product.model.basePrice : 'N/A'}</p>
        <p><strong>Discounted Price :</strong> {product.discounted_price}</p>
        <p><strong>Price to pay :</strong> {product.model.basePrice - product.discounted_price}</p>
        {/* <p><strong>Brand:</strong> {product.model && product.model.brand ? product.model.brand.brand_name : 'Unknown'}</p>
        <p><strong>Seller:</strong> {product.seller}</p> */}
        <button className="btn btn-primary btn-showproductdetails" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ShowProductDetails;
