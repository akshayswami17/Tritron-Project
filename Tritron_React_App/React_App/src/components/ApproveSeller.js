import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import Navbar from '../NavBar/navbar';
import { getOwners } from "./components/ApproveSeller";


function ApproveSeller()
{
  const [owners, setVendors] = useState([]);

  useEffect(() => {
    // Fetch vendors from the API
    fetch('http://localhost:8080/getAllSellers')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the fetched data to the console
        setVendors(data); // Set the fetched data to the state
      })
      .catch(error => console.error('Error fetching vendors', error));
  }, []);

 

  const handleApprove = (rowner_id) => {
    // Handle login approval
    fetch("http://localhost:8080/"+rowner_id+"/approve")
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Login updated successfully!');
          // Optionally update the state or perform any other actions
        } else {
          // Handle error
          console.error('Error updating login:', response.statusText);
        }
      })
      .catch(error => console.error('Error updating login:', error));
  };
  

  const handleReject = (rowner_id) => {
    // Handle vendor rejection
    fetch("http://localhost:8080/"+rowner_id+"/reject")
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Vendor rejected successfully!');
          // Optionally update the state or perform any other actions
        } else {
          // Handle error
          console.error('Error rejecting vendor:', response.statusText);
        }
      })
      .catch(error => console.error('Error rejecting vendor:', error));
  };


  return(
    <div className='container'>
      <div className='row'>
   {/* <Navbar/> */}
   </div>
   <br/>
   <br/> 
    <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Shop name</th>
            <th>phone no</th>
            <th>Address</th>
            <th>License_id</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((ro, index) => (
            <tr key={index}>
              <td>{ro.username}</td>
              <td>{ro.Shop_name}</td>
              <td>{ro.phone_no}</td>
              <td>{ro.address}</td>
              <td>{ro.License_id}</td>
              <td>{ro.email}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      {JSON.stringify(owners)}

   </div>
  );
}

export default ApproveSeller;