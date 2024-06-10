import React, { useEffect, useState } from 'react';
import '../CSS Files/SuccessSpinner.css'; // Create and style this CSS file
import { useNavigate } from 'react-router-dom';

const SuccessSpinner = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-success-spinner">
      {!showMessage ? (
        <div className="spinner-container">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h2 className="text-success">Successfully</h2>
          <p>Your action was successful.</p>
          <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default SuccessSpinner;
