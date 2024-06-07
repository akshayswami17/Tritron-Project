
// import React, { useEffect, useState } from 'react';

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/users/activationstatus/0')
//       .then(response => response.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Username</th>
//           <th>Activation Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(user => (
//           <tr key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.username}</td>
//             <td>{user.activation_status ? 'Active' : 'Inactive'}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default UserList;



import React, { useState } from 'react';

const SellerRegistration = () => {
  const initialUsers = [
    { id: 1, userName: 'User9', password: 'Password9', roleId: 3, activationStatus: false },
    { id: 2, userName: 'User10', password: 'Password10', roleId: 3, activationStatus: false },
  ];

  const [users, setUsers] = useState(initialUsers);

  const activateUser = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, activationStatus: !user.activationStatus };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4" style={{ color: "#007BFF" }}>Seller registration Approval</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Password</th>
            <th>Role ID</th>
            <th>Activation Status</th>
            <th>Activate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.userName}</td>
              <td>{user.password}</td>
              <td>{user.roleId}</td>
              <td>{user.activationStatus ? 'true' : 'false'}</td>
              <td>
                <button className="btn btn-outline-danger"
                 onClick={() => activateUser(user.id)}>Activate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerRegistration;