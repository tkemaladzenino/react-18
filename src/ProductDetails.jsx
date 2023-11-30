

// ProductDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch detailed information for the specific product
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then(response => {
                setProductDetails(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                setError(error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !productDetails) {
        return <p>Error fetching product details. Please try again later.</p>;
    }

    return (
        <div style={{ padding: '40px' }}>
            <h2>Product Details</h2>
            {Object.keys(productDetails).map(key => (
                <p key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {key === 'thumbnail' ? <img src={productDetails[key]} alt="Product" style={{ maxWidth: '100%' }} /> : productDetails[key]}
                </p>
            ))}
        </div>
    );
};

export default ProductDetails;


