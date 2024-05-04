
// import React, { useState, useEffect } from 'react';

// const UpdateDiscountedPricePage = () => {
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [models, setModels] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedModel, setSelectedModel] = useState('');
//   const [discountValue, setDiscountValue] = useState('');
//   const [selectedProductId, setSelectedProductId] = useState(null);

//   useEffect(() => {
//     // Fetch categories on component mount
//     fetch('http://localhost:8080/getAllCategories')
//       .then(response => response.json())
//       .then(data => setCategories(data))
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   const handleCategoryChange = (event) => {
//     const selectedCategoryId = event.target.value;
//     setSelectedCategory(selectedCategoryId);
//   };

//   useEffect(() => {
//     // Fetch all brands
//     fetch('http://localhost:8080/getAllBrands')
//       .then(response => response.json())
//       .then(data => setBrands(data))
//       .catch(error => console.error('Error fetching brands:', error));
//   }, [selectedCategory]);

//   const handleBrandChange = (event) => {
//     const selectedBrandId = event.target.value;
//     setSelectedBrand(selectedBrandId);

//     // Fetch models based on selected brand
//     fetch(`http://localhost:8080/getModels?categoryid=${selectedCategory}&brandid=${selectedBrandId}`)
//       .then(response => response.json())
//       .then(data => setModels(data))
//       .catch(error => console.error('Error fetching models:', error));
//   };

//   const handleModelChange = (event) => {
//     const selectedModelId = event.target.value;
//     setSelectedModel(selectedModelId);

//     // Fetch products based on selected model
//     fetch(`http://localhost:8080/getProducts?id=${selectedModelId}`)
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   };

//   const handleDiscountValueChange = (event) => {
//     setDiscountValue(event.target.value);
//   };

//   const handleSetDiscount = () => {
//     // Assuming 'pid' is the product id and 'dp' is the discounted price
//     const requestBody = {
//       pid: selectedProductId,
//       dp: discountValue
//     };

//     // Update discounted price on the backend
//     fetch('http://localhost:8080/updateDiscountedPrice', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any additional headers if needed
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Discounted price updated successfully');
//         } else {
//           console.error('Failed to update discounted price');
//         }
//       })
//       .catch(error => console.error('Error updating discounted price:', error));
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Product ID</th>
//             <th>Model ID</th>
//             <th>Base Price</th>
//             <th>Discounted Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.product_id}>
//               <td>{product.product_id}</td>
//               <td>{product.model_id}</td>
//               <td>{product.base_price}</td>
//               <td>{product.discounted_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div>
//         <label>Select Category:</label>
//         <select value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="">Select Category</option>
//           {categories.map(category => (
//             <option key={category.id} value={category.id}>{category.name}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label>Select Brand:</label>
//         <select value={selectedBrand} onChange={handleBrandChange}>
//           <option value="">Select Brand</option>
//           {brands.map(brand => (
//             <option key={brand.id} value={brand.id}>{brand.name}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label>Select Model:</label>
//         <select value={selectedModel} onChange={handleModelChange}>
//           <option value="">Select Model</option>
//           {models.map(model => (
//             <option key={model.id} value={model.id}>{model.name}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label>Discount Value:</label>
//         <input type="text" value={discountValue} onChange={handleDiscountValueChange} />
//       </div>

//       <button onClick={handleSetDiscount}>Set New Discounted Value</button>
//     </div>
//   );
// };

// export default UpdateDiscountedPricePage;

////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import './UpdateDiscountedPrice.css';


// const UpdateDiscountedPricePage = () => {
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [models, setModels] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedModel, setSelectedModel] = useState(0);
//   const [discountValue, setDiscountValue] = useState('');
//   const [selectedProductId, setSelectedProductId] = useState(null);

//   useEffect(() => {
//     // Fetch categories on component mount
//     fetch('http://localhost:8080/getAllCategories')
//       .then(response => response.json())
//       .then(data => setCategories(data))
//       .catch(error => console.error('Error fetching categories:', error));

//       fetch('http://localhost:8080/getAllBrands')
//       .then(response => response.json())
//       .then(data => setBrands(data))
//       .catch(error => console.error('Error fetching brands:', error));
//   }, []);

//   const handleCategoryChange = (event) => {
//     const selectedCategoryId = event.target.value;
//     setSelectedCategory(selectedCategoryId);
//   };

//   /*useEffect(() => {
//     // Fetch all brands
//     fetch('http://localhost:8080/getAllBrands')
//       .then(response => response.json())
//       .then(data => setBrands(data))
//       .catch(error => console.error('Error fetching brands:', error));
//   }, [selectedCategory]); */

//   const handleBrandChange = (event) => {
//     const selectedBrandId = event.target.value;
//     setSelectedBrand(selectedBrandId);

//     // Fetch models based on selected brand
//     fetch(`http://localhost:8080/getModels?categoryid=${selectedCategory}&brandid=${selectedBrandId}`)
//       .then(response => response.json())
//       .then(data => setModels(data))
//       .catch(error => console.error('Error fetching models:', error));
//   };

//   // const handleModelChange = (event) => {
//   //   const selectedModelId = event.target.value;
//   //   setSelectedModel(selectedModelId);

//   //   // Fetch products based on selected model
//   //   fetch(`http://localhost:8080/getProducts?id=${selectedModelId}`)
//   //     .then(response => response.json())
//   //     .then(data => setProducts(data))
//   //     .catch(error => console.error('Error fetching products:', error));
//   // };
//   const handleModelChange = (event) => {
//   const selectedModelId = event.target.value;
//   setSelectedModel(selectedModelId);

//   // Fetch products based on selected model
//   fetch(`http://localhost:8080/getProducts?id=${selectedModelId}`)
//     .then(response => response.json())
//     .then(data => setProducts(data))
//     .catch(error => console.error('Error fetching products:', error));

//   // Reset models state to an empty array to avoid "map is not a function" error
//   //setModels([]);
// };


//   const handleDiscountValueChange = (event) => {
//     setDiscountValue(event.target.value);
//   };

//   const handleSetDiscount = () => {
//     // Assuming 'pid' is the product id and 'dp' is the discounted price
//     const requestBody = {
//       pid: selectedProductId,
//       dp: discountValue
//     };

//     // Update discounted price on the backend
//     fetch('http://localhost:8080/updateDiscountedPrice', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any additional headers if needed
//       },
//       body: JSON.stringify({
//          mid: selectedModel,
//          sid:  ,
//       dp: discountValue
//       }),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Discounted price updated successfully');
//         } else {
//           console.error('Failed to update discounted price');
//         }
//       })
//       .catch(error => console.error('Error updating discounted price:', error));
//   };

//   return (
//     <div>
//       {/* <table>
//         <thead>
//           <tr>
//             <th>Product ID</th>
//             <th>Model ID</th>
//             <th>Base Price</th>
//             <th>Discounted Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.product_id}>
//               <td>{product.product_id}</td>
//               <td>{product.model_id}</td>
//               <td>{product.base_price}</td>
//               <td>{product.discounted_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}

// <div className="form-group">
//         <label>Select Category:</label>
//         <select className="form-control" value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="">Select Category</option>
//           {categories.map(category => (
//             <option key={category.categoryId} value={category.categoryId}>{category.category_Name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Select Brand:</label>
//         <select className="form-control" value={selectedBrand} onChange={handleBrandChange}>
//           <option value="">Select Brand</option>
//           {brands.map(brand => (
//             <option key={brand.brand_id} value={brand.brand_id}>{brand.brand_name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Select Model:</label>
//         <select className="form-control" value={selectedModel} onChange={handleModelChange}>
//           <option value="">Select Model</option>
//           {models.map(model => (
//             <option key={model.model_Id} value={model.model_Id}>{model.model_Name}</option>
//           ))}
//         </select>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Product ID</th>
//             <th>Model ID</th>
//             <th>Base Price</th>
//             <th>Discounted Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.product_id}>
//               <td>{product.product_id}</td>
//               <td>{product.model_id}</td>
//               <td>{product.base_price}</td>
//               <td>{product.discounted_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div>
//         <label>Discount Value:</label>
//         <input type="text" value={discountValue} onChange={handleDiscountValueChange} />
//       </div>

//       <button onClick={handleSetDiscount}>Set New Discounted Value</button>

//       <p> {JSON.stringify(models)}</p>
      
//     </div>
//   );
// };

// export default UpdateDiscountedPricePage;


//23-02-2024 at 11:02

import React, { useState, useEffect } from 'react';
import './UpdateDiscountedPrice.css';

const UpdateDiscountedPricePage = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [discountValue, setDiscountValue] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // Fetch categories on component mount
    fetch('http://localhost:8080/getAllCategories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch all brands
    fetch('http://localhost:8080/getAllBrands')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Error fetching brands:', error));
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    setSelectedCategory(selectedCategoryId);
  };

  const handleBrandChange = (event) => {
    const selectedBrandId = event.target.value;
    setSelectedBrand(selectedBrandId);

    // Fetch models based on selected brand
    fetch(`http://localhost:8080/getModels?categoryid=${selectedCategory}&brandid=${selectedBrandId}`)
      .then(response => response.json())
      .then(data => setModels(data))
      .catch(error => console.error('Error fetching models:', error));
  };

  const handleModelChange = (event) => {
    const selectedModelId = event.target.value;
    setSelectedModel(selectedModelId);

    // Fetch products based on selected model
    fetch(`http://localhost:8080/getProducts?id=${selectedModelId}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const handleDiscountValueChange = (event) => {
    setDiscountValue(event.target.value);
  };

  const handleSetDiscount = () => {
    // Assuming 'pid' is the product id and 'dp' is the discounted price
    const requestBody = {
      pid: selectedProductId,
      dp: discountValue
    };

    // Update discounted price on the backend
    fetch('http://localhost:8080/updateDiscountedPrice', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify({
        mid: selectedModel,
        sid: selectedProductId,
        dp: discountValue
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Discounted price updated successfully');
        } else {
          console.error('Failed to update discounted price');
        }
      })
      .catch(error => console.error('Error updating discounted price:', error));
  };

  return (
    <div>
      <div className="form-group">
        <label>Select Category:</label>
        <select className="form-control" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.categoryId} value={category.categoryId}>{category.category_Name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Select Brand:</label>
        <select className="form-control" value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Select Brand</option>
          {brands.map(brand => (
            <option key={brand.brand_id} value={brand.brand_id}>{brand.brand_name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Select Model:</label>
        <select className="form-control" value={selectedModel} onChange={handleModelChange}>
          <option value="">Select Model</option>
          {models.map(model => (
            <option key={model.model_Id} value={model.model_Id}>{model.model_Name}</option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Model ID</th>
            <th>Base Price</th>
            <th>Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.model_id}</td>
              <td>{product.base_price}</td>
              <td>{product.discounted_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label>Discount Value:</label>
        <input type="text" value={discountValue} onChange={handleDiscountValueChange} />
      </div>

      <button onClick={handleSetDiscount}>Set New Discounted Value</button>

      <p> {JSON.stringify(models)}</p>

    </div>
  );
};

export default UpdateDiscountedPricePage;
