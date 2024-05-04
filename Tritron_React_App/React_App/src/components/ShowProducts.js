// import { useEffect,useState} from "react";
// import { useAccordionButton } from "react-bootstrap";

// const ShowProducts = () => {

//     const [products,setProducts] = useState([]);
//     useEffect (()=>{
//         setProducts(JSON.parse(localStorage.getItem("searchedProducts")))
//         console.log(products);
//     },[])

//     const addtocart = (id,qty) => {

//       let cart = JSON.parse(localStorage.getItem("cart"));
//       if( cart === null)
//           cart = [];
//       cart.push({pid: id, qty: qty});
//       localStorage.setItem("cart",JSON.stringify(cart))

//     }

//     return (
//       <div className="container mt-4">
//         <h2 className="mb-4" style={{ color: '#007BFF' }}>Products</h2>
//         <table className="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th>Product ID</th>
//               <th>Brand Name</th>
//               <th>Model Name</th>
//               <th>Shop Name</th>
//               <th>Address</th>
//               <th>Area</th>
//               <th>City</th>
//               <th>Base Price</th>
//               <th>Discounted Price</th>
//               <th>quantity</th>                        
//               <th>Action</th>
//             </tr>
//           </thead>
          
//           {products.map(p => (   
//           <tbody>  
//             <tr key={p.product_Id}>
//               <td>{p.product_id}</td>
//               <td>{p.model.brand.brand_name}</td>
//               <td>{p.model.model_Name}</td>
//               <td> {p.seller.shop_name}</td>
//               <td> {p.seller.address}</td>
//               <td>{p.seller.area.area_name}</td>
//               <td>{p.seller.area.city.c_name}</td>
//               <td>{p.model.basePrice}</td>
//               <td>{p.discounted_price}</td>
//               <td> <input type="number" value="1" /> </td>
              
//               <td>
//                 <button className="btn btn-danger" onClick={() => addtocart(p.product_Id,1)}>
//                   Place Order
//                 </button>
//               </td>
//             </tr>
//             </tbody>
//           ))}
              
//         </table>
//       </div>
//   );
// };

// export default ShowProducts;




// import { useEffect, useState } from "react";
// import { useAccordionButton } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const ShowProducts = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('confirmorder');
//   };
  
//   useEffect(() => {
//     setProducts(JSON.parse(localStorage.getItem("searchedProducts")));
//   }, []);

//   const addToCart = (id, qty) => {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if (cart === null) {
//       cart = [];
//     }
//     cart.push({ pid: id, qty: qty });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     navigate("confirmorder");
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4" style={{ color: "#007BFF" }}>
//         Products
//       </h2>
//       <table className="table table-striped table-hover">
//         <thead>
//           <tr>
//             <th>Product ID</th>
//             <th>Brand Name</th>
//             <th>Model Name</th>
//             <th>Shop Name</th>
//             <th>Address</th>
//             <th>Area</th>
//             <th>City</th>
//             <th>Base Price</th>
//             <th>Discounted Price</th>
//             <th>quantity</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p) => (
//             <tr key={p.product_id}>
//               <td>{p.product_id}</td>
//               <td>{p.model.brand.brand_name}</td>
//               <td>{p.model.model_Name}</td>
//               <td>{p.seller.shop_name}</td>
//               <td>{p.seller.address}</td>
//               <td>{p.seller.area.area_name}</td>
//               <td>{p.seller.area.city.c_name}</td>
//               <td>{p.model.basePrice}</td>
//               <td>{p.discounted_price}</td>
//               <td>
//                 <input type="number" value="1" />
//               </td>
//               <td>
//               <button
//                   className="btn btn-danger"
//                   onClick={handleClick}>
//                   Place Order
//               </button> 
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ShowProducts;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("searchedProducts")));
  }, []);

  const addToCart = (id, qty) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
      cart = [];
    }
    cart.push({ pid: id, qty: qty });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: "#007BFF" }}>
        Products
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Brand Name</th>
            <th>Model Name</th>
            <th>Shop Name</th>
            <th>Address</th>
            <th>Area</th>
            <th>City</th>
            <th>Base Price</th>
            <th>Discounted Price</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.product_id}>
              <td>{p.product_id}</td>
              <td>{p.model.brand.brand_name}</td>
              <td>{p.model.model_Name}</td>
              <td>{p.seller.shop_name}</td>
              <td>{p.seller.address}</td>
              <td>{p.seller.area.area_name}</td>
              <td>{p.seller.area.city.c_name}</td>
              <td>{p.model.basePrice}</td>
              <td>{p.discounted_price}</td>
              
              <td>
                <input type="number" value="1" />
              </td>
              <td>
                {/* Use Link to navigate to the ConfirmOrder page */}
                <Link to="/confirmorder">
                  <button
                    className="btn btn-danger"
                    onClick={() => addToCart(p.product_id, 1)}>
                    Place Order
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
