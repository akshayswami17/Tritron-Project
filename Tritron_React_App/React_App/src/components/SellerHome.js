import { Link, Outlet } from "react-router-dom";
import "../CSS Files/AdminHome.css";
import logo from "./Images/logo1.jpg";

export default function SellerHome() {

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark mb-3 rounded-4" >
                <div className="container-fluid">
                <li className="navbar-brand">
                    <Link to="/">
                        <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
                    </Link>
                </li>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="updateprofile" className="nav-Link px-3" style={{ color: 'white' }} > Update Profile </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="manageproducts" className="nav-Link px-3" > Manage Products </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="updatediscountedprice" className="nav-Link px-3" style={{ color: 'white' }} > Update Offers </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="vieworders" className="nav-Link px-3" style={{ color: 'white' }} > Order History </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="orderstatus" className="nav-Link px-3" style={{ color: 'white' }} > Order Status </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="viewFeedback" className="nav-Link px-3" style={{ color: 'white' }} > Feedback </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="AddProductPage" className="nav-Link px-3" style={{ color: 'white' }} >  Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-Link px-3" style={{ color: 'red' }} > Logout </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <h1>Seller Home</h1>
            <Outlet/>
        </div>
    )
}