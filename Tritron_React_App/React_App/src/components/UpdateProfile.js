import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './UpdateProfile.css';

function UpdateProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;
  
  const [formData, setFormData] = useState({
    uid: '', // Add uid field here
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_no: 0,
    email: '',
    // Add more fields as needed
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        uid: userData.uid, // Populate uid from userData
        username: userData.username,
        password: userData.password,
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone_no: userData.phone_no,
        email: userData.email,
        // Populate other fields as needed
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add validation logic here before submitting

    try {
      const response = await fetch(`http://localhost:8080/updateUser/${formData.uid}`, { // Use formData.uid
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Profile updated successfully!");
        navigate("/consumer_home"); // Redirect to the profile page or wherever needed
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className='updateprofile container'>
      <h2 className="mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="uid" className="form-label">User id: </label>
          <input
            type="text"
            id="uid"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">Phone Number: </label>
          <input
            type="number"
            id="phoneNo"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div> */}
        {/* Add more fields as needed */}
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
