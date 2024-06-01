// import React, { useReducer, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from './slice';
// import './LoginComp.css';

// export default function LoginComp() {
//   const initialState = {
//     username: "",
//     password: ""
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'update':
//         return { ...state, [action.field]: action.value };
//       case 'reset':
//         return initialState;
//       default:
//         return state;
//     }
//   };

//   const [formData, dispatch] = useReducer(reducer, initialState);
//   const [errorMsg, setErrorMsg] = useState("");
//   const navigate = useNavigate();
//   const reduxDispatch = useDispatch();

//   const handleChange = (e, field) => {
//     dispatch({ type: 'update', field, value: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8080/checkUser", {
//         method: 'POST',
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify({
//           username: formData.username,
//           password: formData.password
//         })
//       });

//       if (!response.ok) {
//         throw new Error("Server Error");
//       }

//       const data = await response.json();
//       if (data === null) {
//         setErrorMsg("Wrong Username/Password");
//       } else {
//         reduxDispatch(login());
//         if (!data.activation_status) {
//           alert("Request has not been approved");
//         } else {
//           switch (data.role.role_id) {
//             case 1:
//               navigate("/admin_home");
//               break;
//             case 2:
//               navigate("/consumer_home");
//               break;
//             case 3:
//               navigate("/seller_home");
              
//               break;
//             default:
//               break;
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error: " + error.message);
//     }
//   };

//   const handleClear = () => {
//     dispatch({ type: 'reset' });
//     setErrorMsg("");
//   };

//   return (
//     <div className='login-container'>
//       <h1 className='login-heading'>LOGIN</h1>
//       <form className="my-4" onSubmit={handleSubmit}>
//         <div className="mb-3 row">
//           <label htmlFor="username" className="col-sm-3 col-form-label">
//             Username:
//           </label>
//           <div className="col-sm-8">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={(e) => handleChange(e, 'username')}
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="password" className="col-sm-3 col-form-label">
//             Password:
//           </label>
//           <div className="col-sm-8">
//             <input
//               type="password"
//               className="form-control form-control-sm"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={(e) => handleChange(e, 'password')}
//             />
//           </div>
//         </div>
        
//         <div className="form-row">
          
          
//             <button type="submit" className="btn btn-primary me-2">Submit</button>
//             <button type="button" className="btn btn-danger" onClick={handleClear}>Clear</button>
          
//         </div>
//       </form>
//       {errorMsg && <p className="error-message">{errorMsg}</p>}
//     </div>
//   );
// }


//01-06-2024

import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './slice';
import './LoginComp.css';

export default function LoginComp() {
  const initialState = {
    username: "",
    password: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.value };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const handleChange = (e, field) => {
    dispatch({ type: 'update', field, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/checkUser", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      if (data === null) {
        setErrorMsg("Wrong Username/Password");
      } else {
        reduxDispatch(login(data)); // Dispatch login action with user data
        if (!data.activation_status) {
          alert("Request has not been approved");
        } else {
          switch (data.role.role_id) {
            case 1:
              navigate("/admin_home");
              break;
            case 2:
              navigate("/consumer_home");
              break;
            case 3:
              navigate("/seller_home");
              break;
            default:
              break;
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  };

  const handleClear = () => {
    dispatch({ type: 'reset' });
    setErrorMsg("");
  };

  return (
    <div className='login-container'>
      <h1 className='login-heading'>LOGIN</h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-3 col-form-label">
            Username:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control form-control-sm"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e, 'username')}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-3 col-form-label">
            Password:
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, 'password')}
            />
          </div>
        </div>
        
        <div className="form-row">
          <button type="submit" className="btn btn-primary me-2">Submit</button>
          <button type="button" className="btn btn-danger" onClick={handleClear}>Clear</button>
        </div>
      </form>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}
