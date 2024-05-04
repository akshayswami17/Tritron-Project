import { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/Registraction.css';

export default function SellerReg() {
    const init = {
        username: "",
        password: "",
        Shop_name: "",
        email: "",
        phone_no: "",
        License_id: "",
        GST_No: "",       
        area: 0,
        address:""
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
    const [errorMsgs, setErrorMsgs] = useState(init); // State to hold error messages
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/getCities")
        .then(resp => {
            if(resp.ok)
            {
                return resp.json();
            }
            else{
                throw new Error("server error")
            }
        })
        .then(data => setCities(data))
    }, []); 

   const getAreas = (id) => {
      fetch("http://localhost:8080/getAreas?cid="+id)
      .then(resp => {
        if(resp.ok)
            {
                return resp.json();
            }
            else{
                throw new Error("server error")
            }
      })
      .then(obj => setAreas(obj))
      .catch(error => console.log(error.toString()));
   }

    const sendData = (e) => {
        e.preventDefault();
        const requiredFields = ['username', 'password', 'Shop_name', 'email', 'phone_no', 'License_id', 'GST_No', 'area', 'address'];
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

        const confirmed = window.confirm("Are you sure you want to submit the form?");
        if (!confirmed) {
            return; 
        }

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                username: info.username,
                password: info.password,
                email: info.email,
                shop_name: info.Shop_name,
                license_id: info.License_id,
                phone_no: info.phone_no,
                gst_no: info.GST_No,       
                area_id: info.area,
                address: info.address
            })
        };

        fetch("http://localhost:8080/sellerreg", reqOptions)
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
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    }
//className="container mt-5 login-form-container col-6"
    return (
        <div  className="registraction-container" > 
         {/* mt-5  col-md-4 bg-light needs-validation pb-5 pt-5 rounded */}
            <h1 className='seller-heading'> Seller Registraction </h1>
            <form>
            <div className="form-row">
    <div className="form-group">
        <label htmlFor="username" className="form-label">Enter User Name :</label>
        <input type="text" className="form-control" id="username" name="username" value={info.username}  
        onChange={(e)=>{dispatch({type:'update',fld:'username', val:e.target.value})}} required pattern="[a-zA-Z0-9_-]{3,16}$" />
        <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.username} </div>
        <div id="emailHelp" className="form-text"></div>
    </div>

    <div className="form-group">
        <label htmlFor="password" className="form-label">Enter Password :</label>
        <input type="password" className="form-control" id="password" name="password" value={info.password} 
        onChange={(e)=>{dispatch({type:'update',fld:'password', val:e.target.value})}} required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}" />
        <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.password}</div>
        <div id="pwdHelp" className="form-text"></div>
    </div>
    <div className="form-group">
    <label htmlFor="email" className="form-label">Enter User email :</label>
    <input type="email" className="form-control" id="email" name="email" value={info.email}  
    onChange={(e)=>{dispatch({type:'update',fld:'email', val:e.target.value})}} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.email}</div>
    <div id="emailHelp" className="form-text"></div>
</div>
</div>


<div className="form-row">
<div className="form-group">
    <label htmlFor="Shop_name" className="form-label">Enter Shop Name :</label>
    <input type="text" className="form-control" id="Shop_name" name="Shop_name" value={info.Shop_name} 
    onChange={(e)=>{dispatch({type:'update',fld:'Shop_name', val:e.target.value})}} required />
    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.Shop_name}</div>
    <div id="emailHelp" className="form-text"></div>
</div>
<div className="form-group">
    <label htmlFor="License_id" className="form-label">Enter User License_id :</label>
    <input type="text" className="form-control" id="License_id" name="License_id" value={info.License_id}  
    onChange={(e)=>{dispatch({type:'update',fld:'License_id', val:e.target.value})}} required />
    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.License_id}</div>
    <div id="emailHelp" className="form-text"></div>
</div>
<div className="form-group">
    <label htmlFor="GST_No" className="form-label">Enter User GST_No :</label>
    <input type="text" className="form-control" id="GST_No" name="GST_No" value={info.GST_No}  
    onChange={(e)=>{dispatch({type:'update',fld:'GST_No', val:e.target.value})}} required />
    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.GST_No}</div>
    <div id="emailHelp" className="form-text"></div>
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
                        onChange={(e)=>getAreas(e.target.value)}>
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
                        onChange={(e) => {
                        dispatch({ type: 'update', fld: 'area', val: e.target.value });
                        }}
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
                    <label htmlFor="address" className="form-label">Enter User address :</label>
                    <input type="text" className="form-control" id="address" name="address" value={info.address}  
                    onChange={(e)=>{dispatch({type:'update',fld:'address', val:e.target.value})}}/>
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.address}</div>
                    <div id="emailHelp" className="form-text"></div>
</div> 
</div>



               
                
    

<div className="form-row">
<div className="form-group col-md-6">
    <label htmlFor="phone_no" className="form-label">Enter User phone_no :</label>
    <input type="tel" className="form-control" id="phone_no" name="phone_no" value={info.phone_no}  
    onChange={(e)=>{dispatch({type:'update',fld:'phone_no', val:e.target.value})}} required pattern="\d{10}" />
    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.phone_no}</div>
    <div id="emailHelp" className="form-text"></div>
</div>              
                
                <button type="submit" className="btn-1 btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
                <button type="reset" className="btn-1 btn-info mb-3" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
</div>
            </form>
             {/* <p>{JSON.stringify(info)}</p> */}
            {/* <p>{msg}</p>  */}
        </div>
    )
} 