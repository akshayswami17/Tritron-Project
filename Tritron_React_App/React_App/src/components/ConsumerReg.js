import { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/Registraction.css';
export default function ConsumerReg() {
    const init = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        area: 0,
        address: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val }
            case 'reset':
                return init;
            default:
                return state;
        }
    }

    const [info, dispatch] = useReducer(reducer, init);
    const [cities, setCities] = useState([]); 
    const [areas, setAreas] = useState([]);
    const [msg, setMsg] = useState("");
    const [errorMsgs, setErrorMsgs] = useState(init);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/getCities")
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("server error")
                }
            })
            .then(data => setCities(data))
            .catch(error => console.log(error.toString()));
    }, []); 

    const getAreas = (id) => {
        fetch("http://localhost:8080/getAreas?cid=" + id)
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("server error")
                }
            })
            .then(obj => setAreas(obj))
            .catch(error => console.log(error.toString()));
    }

    const sendData = (e) => {
        e.preventDefault();
        const requiredFields = ['username', 'password', 'first_name', 'last_name', 'email', 'phone_no', 'area', 'address'];
        const newErrorMsgs = { ...errorMsgs }; // Copy of current error messages

       
        for (const field of requiredFields) {
            newErrorMsgs[field] = "";
        }

        
        for (const field of requiredFields) {
            if (!info[field]) {
                newErrorMsgs[field] = "This field is required";
            }
        }

        // Check if any error messages exist
        for (const field of requiredFields) {
            if (newErrorMsgs[field]) {
                setErrorMsgs(newErrorMsgs);
                return;
            }
        }
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                username: info.username,
                password: info.password,
                first_name: info.first_name,
                last_name: info.last_name,
                email: info.email,
                phone_no: info.phone_no,       
                area_id: info.area,
                address: info.address
            })
        }
        fetch("http://localhost:8080/consumerreg", reqOptions)
            .then(resp => {
                if (resp.ok) {
                     console.log(resp.status)
                    return resp.json();
                } else {
                    throw new Error("server error");
                }
            })
            .then(obj => {
                alert("Registration successful, Try Login");
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            });
    }
//className="container mt-5 login-form-container col-6"
    return (
        <div className="registraction-container">
            <h1 className='consumer-heading'> Consumer Registration </h1>
            <form>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Enter User Name :</label>
                    <input type="text" className="form-control" id="username" name="username" 
                        value={info.username}  
                        onChange={(e) => dispatch({type: 'update', fld: 'username', val: e.target.value})}
                        required
                        pattern="[a-zA-Z0-9_-]{3,16}$"
                        title="Username allows alphanumeric characters (both lowercase and uppercase), underscores, and hyphens. Length must be between 3 and 16 characters."
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.username}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Enter Password :</label>
                    <input type="password" className="form-control" id="password" name="password" 
                        value={info.password} 
                        onChange={(e) => dispatch({type: 'update', fld: 'password', val: e.target.value})}
                        required
                        pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$"
                        title="Password should contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long."
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.password}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="first_name" className="form-label">Enter First Name :</label>
                    <input type="text" className="form-control" id="first_name" name="first_name" 
                        value={info.first_name} 
                        onChange={(e) => dispatch({type: 'update', fld: 'first_name', val: e.target.value})}
                        required
                    /><div className="error-msg" style={{ color: 'red' }}>{errorMsgs.first_name}</div>
                </div>
        </div>
        <div className="form-row">  
                <div className="form-group">
                    <label htmlFor="last_name" className="form-label">Enter Last Name :</label>
                    <input type="text" className="form-control" id="last_name" name="last_name" 
                        value={info.last_name} 
                        onChange={(e) => dispatch({type: 'update', fld: 'last_name', val: e.target.value})}
                        required
                    /><div className="error-msg" style={{ color: 'red' }}>{errorMsgs.last_name}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Enter User Email :</label>
                    <input type="email" className="form-control" id="email" name="email" 
                        value={info.email}  
                        onChange={(e) => dispatch({type: 'update', fld: 'email', val: e.target.value})}
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Email should be in proper format"
                    /><div className="error-msg" style={{ color: 'red' }}>{errorMsgs.email}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone_no" className="form-label">Enter User Phone Number :</label>
                    <input type="tel" className="form-control" id="phone_no" name="phone_no" 
                        value={info.phone_no}  
                        onChange={(e) => dispatch({type: 'update', fld: 'phone_no', val: e.target.value})}
                        required
                        pattern="[0-9]{10}"
                        title="Phone number should be 10 digits"
                    /><div className="error-msg" style={{ color: 'red' }}>{errorMsgs.phone_no}</div>
                </div>

    </div>
    <div className="form-row">
                <div className="form-group">
                    <label htmlFor="city" className="form-label">Select City:</label>
                    <select
                        className="form-control"
                        id="city"
                        name="city"
                        value={info.city}
                        onChange={(e) => getAreas(e.target.value)}
                        required
                    >
                        <option value="">Select City</option>
                        {cities.map(city => (
                            <option key={city.city_id} value={city.city_id}>{city.c_name}</option>
                        ))}
                    </select>
                </div>       
                <div className="form-group">
                    <label htmlFor="area" className="form-label">Select Area:</label>
                    <select
                        className="form-control"
                        id="area"
                        name="area"
                        value={info.area}
                        onChange={(e) => dispatch({ type: 'update', fld: 'area', val: e.target.value })}
                        required
                    >
                        <option value="">Select Area</option>
                        {areas.map((area) => (
                            <option key={area.area_id} value={area.area_id}>
                                {area.area_name}
                            </option>
                        ))}
                    </select>
                </div>  
                <div className="form-group">
                    <label htmlFor="address" className="form-label">Enter User Address :</label>
                    <input type="text" className="form-control" id="address" name="address" 
                        value={info.address}  
                        onChange={(e) => dispatch({type: 'update', fld: 'address', val: e.target.value})}
                        required
                    /><div className="error-msg" style={{ color: 'red' }}>{errorMsgs.address}</div>
                </div>
    </div>  
    <div className="form-row">           
                <button type="submit" className="btn btn-outline-primary mb-3" onClick={(e) => sendData(e)}>Register</button>
                <button type="reset" className="btn btn-outline-info mb-3" onClick={() => dispatch({type: 'reset'})}>Clear</button>
    </div>
            </form>
            
            {/* <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>  */}
        </div>
    )
}
