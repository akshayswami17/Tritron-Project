import { Link, Outlet } from "react-router-dom";
import "../CSS Files/AdminHome.css";
import logo from "./Images/logo1.jpg";

export default function AdminHome() {
    return (
        <div  className="admin-home">
            <nav className="navbar navbar-expand-sm bg-dark mb-3">
                <div className="container-fluid">
                <li className="navbar-brand">
                    <Link to="/">
                        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto'  }} />
                    </Link>
                </li>
                    <ul className="navbar-nav">
                  

                        <li className="nav-item">
                            <Link to="approveSeller" className="nav-link px-3" style={{ color: 'white' }}>Approve Seller</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="manageUsers" className="nav-link px-3" style={{ color: 'white' }}>Manage Users</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="ViewUsers" className="nav-link px-3" style={{ color: 'white' }}>View Users</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="Viewsellers" className="nav-link px-3" style={{ color: 'white' }}>View Sellers</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="ViewConsumer" className="nav-link px-3" style={{ color: 'white' }}>View Consumer</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="showusersdatabyselectBox" className="nav-link px-3" style={{ color: 'white' }}>Show Users Data By SelectBox</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="viewFeedback" className="nav-link px-3" style={{ color: 'white' }}>View Feedback</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="addBrand" className="nav-link px-3" style={{ color: 'white' }}>Add Brands</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="addModel" className="nav-link px-3" style={{ color: 'white' }}>Add Models</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3" style={{ color: 'red' }}>Logout</Link> 
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <h1>Admin Home</h1> */}
            <Outlet />
        </div>
    );
}
