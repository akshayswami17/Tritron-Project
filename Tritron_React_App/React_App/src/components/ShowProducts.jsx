import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ViewProducts = () => {
  const navigate = useNavigate();
  const [models, setModels] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState('category');
  const [searchTerm, setSearchTerm] = useState('');

  const handleShow = (id) => {
    if (!id) {
      console.error("handleShow called with invalid id");
      return;
    }
    console.log("Show clicked for product with ID: " + id);
    fetch(`http://localhost:8080/api/getProducts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        localStorage.setItem("searchedProducts", JSON.stringify(data));
        navigate("../showproductdetails");
      })
      .catch((error) => {
        console.error("Error fetching data before show:", error);
      });
  };

  const handleSearch = () => {
    console.log(`Searching by ${searchCriteria}: ${searchTerm}`);
    // Add search functionality here if needed
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/getAllModels')
      .then((response) => {
        setModels(response.data);
        console.log("Models data fetched:", response.data); // Log fetched data
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: '#007BFF' }}>Products</h2>
      <div className="row">
        {models.map((model, index) => (
          <div className="col-md-6 mb-3" key={model.modelId ? model.modelId : `model-${index}`}>
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  {/* Placeholder image or model image */}
                  <img 
                    src={model.imageUrl || `${process.env.PUBLIC_URL}/default-image-path.png`} 
                    className="img-fluid rounded-start" 
                    alt={model.modelName} 
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{model.modelName}</h5>
                    <p className="card-text"><strong>Base Price:</strong> {model.basePrice}</p>
                    <p className="card-text"><strong>Brand:</strong> {model.brand ? model.brand.brand_name : 'ERROR'}</p>
                    <p className="card-text">{model.description}</p>
                    <button className="btn btn-primary" onClick={() => handleShow(model.modelId)}>
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
