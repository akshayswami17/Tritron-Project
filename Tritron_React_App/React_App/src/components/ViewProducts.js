// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom'; 

// const ViewUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [searchCriteria, setSearchCriteria] = useState('category');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleDelete = (id) => {
//     console.log("Delete clicked for user with ID:", id);
//     fetch(`http://localhost:8080/deleteUser?id=${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Data:", data);
//       })
//       .catch((error) =>
//         console.error("Error fetching data before delete:", error)
//       );
//   };
  

//   const handleSearch = () => {
//     console.log(`Searching by ${searchCriteria}: ${searchTerm}`);

    
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8080/viewUsers')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4" style={{ color: '#007BFF' }}>Users</h2>
//       <div className="mb-3 row">
//         <div className="col-md-3">
//           <select
//             className="form-select"
//             value={searchCriteria}
//             onChange={(e) => setSearchCriteria(e.target.value)}
//           >
//             <option value="category">Category</option>
//             <option value="brandName">Brand Name</option>
//             <option value="modelName">Model Name</option>
//           </select>
//         </div>
//         <div className="col-md-6">
//         <input
//   type="text"
//   className="form-control"
//   placeholder={`Search by ${searchCriteria}`}
//   value={searchTerm}
//   onChange={(e) => setSearchTerm(e.target.value)}
// />

//         </div>
//         <div className="col-md-3">
//           <button className="btn btn-primary" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>
//       <table className="table table-striped table-hover">
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Category</th>
//             <th>Brand Name</th>
//             <th>Model Name</th>
//             <th>Description</th>
//             <th>Base Price</th>
//             <th>Discounted Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.category}</td>
//               <td>{user.brandName}</td>
//               <td>{user.modelName}</td>
//               <td>{user.description}</td>
//               <td>{user.basePrice}</td>
//               <td>{user.discountedPrice}</td>
//               <td>
//                 <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewUsers;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'; 

const ViewProducts = () => {
  const navigate = useNavigate();
  const [models, setModels] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState('category');
  const [searchTerm, setSearchTerm] = useState('');

  const handleShow = (id) => {
    console.log("Delete clicked for product with ID:"+id);
    fetch(`http://localhost:8080/getProducts?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        localStorage.setItem("searchedProducts",JSON.stringify(data));
        navigate("../showProducts");
      })
      .catch((error) =>
        console.error("Error fetching data before delete:", error)
      );
  };
  

  const handleSearch = () => {
    console.log(`Searching by ${searchCriteria}: ${searchTerm}`);

    
  };

  useEffect(() => {
    axios.get('http://localhost:8080/getAllModels')
      .then(response => {
        setModels(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="container mt-4 rounded-4">
      <h2 className="mb-4" style={{ color: '#007BFF' }}>Products</h2>
      
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Brand Name</th>
            <th>Model Name</th>
            <th>Base Price</th>
            <th>Description</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => (
            <tr key={model.model_Id}>
              <td> {model.model_Id}</td>
              <td>{model.brand.brand_name}</td>
              <td>{model.model_Name}</td>
              <td>{model.basePrice}</td>
              <td>{model.description}</td>
              

              
              <td>
                <button className="btn btn-danger" onClick={() => handleShow(model.model_Id)}>
                  Show Sellers
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProducts;
