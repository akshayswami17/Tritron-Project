import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-left">
      <div className="container1">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSide" aria-controls="navbarSide" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSide">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/sellerreg" className="nav-link"  style={{ color: 'blue' }}>Seller Registration</Link>
            </li>
            <li className="nav-item">
              <Link to="/consumerreg" className="nav-link"  style={{ color: 'blue' }}>Consumer Registration</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link"  style={{ color: 'green' }}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
