import React from 'react';
import '../CSS Files/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <h2 className="display-4">Page Not Found</h2>
        <p className="lead">The page you are looking for does not exist.</p>
        <a href="/" className="btn btn-primary btn-lg mt-4">Go to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
