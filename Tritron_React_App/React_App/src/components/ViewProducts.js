// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

// const ViewProducts = () => {
//   const navigate = useNavigate();
//   const [models, setModels] = useState([]);
//   const [searchCriteria, setSearchCriteria] = useState('category');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleShow = (id) => {
//     console.log("Show clicked for product with ID:" + id);
//     fetch(`http://localhost:8080/getProducts?id=${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Data:", data);
//         localStorage.setItem("searchedProducts", JSON.stringify(data));
//         navigate("../showProducts");
//       })
//       .catch((error) =>
//         console.error("Error fetching data before show:", error)
//       );
//   };

//   const handleSearch = () => {
//     console.log(`Searching by ${searchCriteria}: ${searchTerm}`);
//     // Add search functionality here if needed
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8080/getAllModels')
//       .then(response => {
//         setModels(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []);

//   return (
//     <div className="container mt-4 rounded-4">
//       <h2 className="mb-4" style={{ color: '#007BFF' }}>Products</h2>

//       <table className="table table-striped table-hover">
//         <thead>
//           <tr>
//             {/* <th>Product ID</th> */}
//             <th>Model Name</th>
//             <th>Base Price</th>
//             <th>Brand</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {models.map((modelss) => (
//             <tr key={modelss.model_id}>
//               {/* <td>{model.model_id}</td> */}
//               <td>{modelss.modelName}</td>
//               <td>{modelss.basePrice}</td>
//               <td>{modelss.brand ? modelss.brand.brand_name : 'ERROR'}</td>
//               <td>{modelss.description}</td>
//               <td>
//                 <button className="btn-viewProduct" onClick={() => handleShow(modelss.model_id)}>
//                   Buy now
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewProducts;



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
    <div className="container mt-4 rounded-4">
      <h2 className="mb-4" style={{ color: '#007BFF' }}>Products</h2>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Model ID</th>
            <th>Model Name</th>
            <th>Base Price</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={model.modelId ? model.modelId : `model-${index}`}>
              <td>{model.modelId}</td>
              <td>{model.modelName}</td>
              <td>{model.basePrice}</td>
              <td>{model.brand ? model.brand.brand_name : 'ERROR'}</td>
              <td>{model.description}</td>
              <td>
                <button className="btn-viewProduct" onClick={() => handleShow(model.modelId)}>
                  Buy now
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
