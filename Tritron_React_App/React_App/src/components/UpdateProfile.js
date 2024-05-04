// import React, { useState } from 'react';
// import './UpdateProfile.css';

// function UpdateProfile() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     first_name: '',
//     last_name: '',
//     phone_no: 0,
//     email: '',
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add validation logic here before submitting
//     console.log('Form submitted with data:', formData);
//     // You can submit the form data to your backend here
//   };

//   return (
//     <div className='updateprofile'>
//       <h2>Update Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="firstName">First Name: </label>
//           <input
//             type="text"
//             id="firstName"
//             name="first_name"
//             value={formData.first_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name: </label>
//           <input
//             type="text"
//             id="lastName"
//             name="last_name"
//             value={formData.last_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNo">Phone Number: </label>
//           <input
//             type="number"
//             id="phoneNo"
//             name="phone_no"
//             value={formData.phone_no}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* Add more fields as needed */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateProfile;



// UpdateProfile.css
/* Add your custom styles here */

// UpdateProfile.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './UpdateProfile.css';

function UpdateProfile() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_no: 0,
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here before submitting
    console.log('Form submitted with data:', formData);
    // You can submit the form data to your backend here
  };

  return (
    <div className='updateprofile container'>
      <h2 className="mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
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
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
