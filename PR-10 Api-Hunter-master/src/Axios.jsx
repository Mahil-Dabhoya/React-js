import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Axios.css'; // Import custom CSS for Axios component styles

const Axios = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-light">Products</h2>
                <Link to={"/"}>
                    <button className="btn btn-secondary">Go to Fetch method</button>
                </Link>
            </div>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card custom-card">
                            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title text-light">{product.title}</h5>
                                <p className="card-text text-muted">{product.body}</p>
                                <p className="card-text text-info">Price: ${product.price}</p>
                                <p className="card-text text-muted">Rating: {product.rating}/5</p>
                                <p className="card-text text-muted">Brand: {product.brand}</p>
                                <p className="card-text text-muted">Warranty: {product.warrantyInformation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Axios;
