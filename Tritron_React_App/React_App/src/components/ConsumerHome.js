// import { Link, Outlet } from "react-router-dom";
// import "../CSS Files/AdminHome.css";
// import logo from "./Images/logo1.jpg";
// export default function ConsumerHome() {

//     return (
//         <div>
//         <nav className="navbar navbar-expand-sm bg-dark mb-3" >
//                 <div className="container-fluid">
//                 <li className="navbar-brand">
//                     <Link to="/">
//                         <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
//                     </Link>
//                 </li>
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link to="updateprofile" className="nav-Link px-3" style={{ color: 'white' }}> Update Profile </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="searchproducts" className="nav-Link px-3" style={{ color: 'white' }}> Search Products </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="showproducts" className="nav-Link px-3" style={{ color: 'white' }}> Show Products </Link>
//                         </li>
//                         {/* <li className="nav-item">
//                             <Link to="showproductdetails" className="nav-Link px-3" style={{ color: 'white' }}> ShowProductDetails </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="addcart" className="nav-Link px-3" style={{ color: 'white' }}> Add Cart </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="confirmorder" className="nav-Link px-3" style={{ color: 'white' }}> Confirm Order </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="trackorder" className="nav-Link px-3" style={{ color: 'white' }}> Track Order </Link>
//                         </li> */}
                        
//                         <li className="nav-item">
//                             <Link to="feedbackform" className="nav-Link px-3" style={{ color: 'white' }} > Feedback </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/logout" className="nav-Link px-3" style={{ color: 'red' }}> Logout </Link>
//                         </li>
                        
//                     </ul>
//                 </div>
//             </nav>
//             {/* <h1>Consumer Home</h1> */}
//             <Outlet />
//         </div>
//     )
// }


//01-06-2024
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from "react-router-dom";
import "../CSS Files/AdminHome.css";
import logo from "./Images/logo1.jpg";

export default function ConsumerHome() {
    const userData = useSelector(state => state.user);

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark mb-3" >
                <div className="container-fluid">
                    <li className="navbar-brand">
                        <Link to="/">
                            <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
                        </Link>
                    </li>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="updateprofile" className="nav-Link px-3" style={{ color: 'white' }}> Update Profile </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="searchproducts" className="nav-Link px-3" style={{ color: 'white' }}> Search Products </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="showproducts" className="nav-Link px-3" style={{ color: 'white' }}> Show Products </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="feedbackform" className="nav-Link px-3" style={{ color: 'white' }} > Feedback </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-Link px-3" style={{ color: 'red' }}> Logout </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-profile">
                <div className="row">
                    <div className="col-md-3">
                        <h3>User Data</h3>
                        {/* <p>Username: {userData && <p>Username: {userData.username}</p>}</p>  */}
                       
                        
                    </div>
                    
                </div>
            </div>
            <div className="col-md-9">
                        <Outlet />
            </div>
        </div>
    );
}
