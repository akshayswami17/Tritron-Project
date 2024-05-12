import { useReducer, useState } from 'react';
import '../CSS Files/AddBrand.css';

export default function BrandForm() {
    const init = {
        brandName: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.field]: action.value }
            case 'reset':
                return init;
            default:
                return state;
        }
    }

    const [brand, dispatch] = useReducer(reducer, init);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const sendData = (e) => {
        e.preventDefault();

        // Validate brand name
        if (!brand.brandName) {
            setErrorMsg("Brand name is required");
            return;
        }

        // Send brand data to backend
        fetch("http://localhost:8080/addBrand", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ brandName: brand.brandName }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setSuccessMessage("Brand submitted successfully!");
            dispatch({ type: 'reset' }); // Clear form
        })
        .catch((error) => {
            console.error('Error submitting brand:', error);
        });
    }

    return (
        <div className="brand-container">
            <h1 className='brand-heading'>Add Brand</h1>
            <form>
                <div className="form-group-brand">
                    <label htmlFor="brandName" className="form-label">Brand Name:</label>
                    <input type="text" className="form-control" id="brandName" name="brandName"
                        value={brand.brandName}
                        onChange={(e) => dispatch({ type: 'update', field: 'brandName', value: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsg}</div>
                </div>
                <div className="form-row">
                    <button type="reset" className="btn btn-danger mb-3" onClick={() => dispatch({ type: 'reset' })}>Clear</button>
                    <button type="submit" className="btn btn-primary mb-3" onClick={(e) => sendData(e)}>Submit</button>
                    {successMessage && <p className="text-success">{successMessage}</p>}
                </div>
            </form>
        </div>
    )
}
