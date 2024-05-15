import React, { useEffect, useState, useReducer } from 'react';
import '../CSS Files/AddProduct.css';

const AddProduct = () => {
    const init = {
        model_id: "",
        discounted_price: "",
        seller_id: "",
        base_price: "",
        brand_name: "",
        category: "",
        description: "",
        model_name: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val };
            case 'reset':
                return init;
            default:
                return state;
        }
    };

    const [product, dispatch] = useReducer(reducer, init);
    const [models, setModels] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [errorMsgs, setErrorMsgs] = useState(init);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Fetch models
        fetch('http://localhost:8080/getAllModels')
            .then(response => response.json())
            .then(data => setModels(data))
            .catch(error => console.error('Error fetching models:', error));

        // Fetch sellers
        fetch('http://localhost:8080/getAllSellers')
            .then(response => response.json())
            .then(data => setSellers(data))
            .catch(error => console.error('Error fetching sellers:', error));
    }, []);

    const sendData = (e) => {
        e.preventDefault();
        const requiredFields = ['model_id', 'discounted_price', 'seller_id', 'base_price', 'brand_name', 'category', 'description', 'model_name'];
        const newErrorMsgs = { ...errorMsgs };

        requiredFields.forEach(field => {
            newErrorMsgs[field] = !product[field] ? 'This field is required' : '';
        });

        setErrorMsgs(newErrorMsgs);

        if (requiredFields.some(field => !product[field])) return;

        fetch("http://localhost:8080/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setSuccessMessage("Product added successfully!");
                dispatch({ type: 'reset' });
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <div className="product-container">
            <h1 className="product-heading">Add Product</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="model_id" className="form-label">Model:</label>
                    <select className="form-control" id="model_id" name="model_id"
                        value={product.model_id}
                        onChange={(e) => dispatch({ type: 'update', fld: 'model_id', val: e.target.value })}
                        required
                    >
                        <option value="">Select Model</option>
                        {models.map(model => (
                            <option key={model.model_id} value={model.model_id}>{model.model_name}</option>
                        ))}
                    </select>
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.model_id}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="discounted_price" className="form-label">Discounted Price:</label>
                    <input type="number" className="form-control" id="discounted_price" name="discounted_price"
                        value={product.discounted_price}
                        onChange={(e) => dispatch({ type: 'update', fld: 'discounted_price', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.discounted_price}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="seller_id" className="form-label">Seller:</label>
                    <select className="form-control" id="seller_id" name="seller_id"
                        value={product.seller_id}
                        onChange={(e) => dispatch({ type: 'update', fld: 'seller_id', val: e.target.value })}
                        required
                    >
                        <option value="">Select Seller</option>
                        {sellers.map(seller => (
                            <option key={seller.seller_id} value={seller.seller_id}>{seller.shop_name}</option>
                        ))}
                    </select>
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.seller_id}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="base_price" className="form-label">Base Price:</label>
                    <input type="number" className="form-control" id="base_price" name="base_price"
                        value={product.base_price}
                        onChange={(e) => dispatch({ type: 'update', fld: 'base_price', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.base_price}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="brand_name" className="form-label">Brand Name:</label>
                    <input type="text" className="form-control" id="brand_name" name="brand_name"
                        value={product.brand_name}
                        onChange={(e) => dispatch({ type: 'update', fld: 'brand_name', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.brand_name}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="category" className="form-label">Category:</label>
                    <input type="text" className="form-control" id="category" name="category"
                        value={product.category}
                        onChange={(e) => dispatch({ type: 'update', fld: 'category', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.category}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description"
                        value={product.description}
                        onChange={(e) => dispatch({ type: 'update', fld: 'description', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.description}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="model_name" className="form-label">Model Name:</label>
                    <input type="text" className="form-control" id="model_name" name="model_name"
                        value={product.model_name}
                        onChange={(e) => dispatch({ type: 'update', fld: 'model_name', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.model_name}</div>
                </div>
                <div className="form-row">
                    <button type="reset" className="btn btn-danger mb-3" onClick={() => dispatch({ type: 'reset' })}>Clear</button>
                    <button type="submit" className="btn btn-primary mb-3" onClick={(e) => sendData(e)}>Submit</button>
                    {successMessage && <p className="text-success">{successMessage}</p>}
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
