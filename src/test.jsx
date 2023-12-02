
// Main.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./css/style.css";

import wish from './images/wish.png';
import hart from './images/hart.png';

function Main({ updateSelectedProducts }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                const productsData = response.data.products;
                setProducts(productsData);
                setLoading(false);
            })

    }, []);

    const handleWishClick = () => {
        // Increment the selected products count
        updateSelectedProducts();
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
        rows.push(products.slice(i, i + 3));
    }

    return (
        <div className="container-fluid">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row product-row">
                    {row.map(product => (
                        <div key={product.id} className="col-12 col-lg-4 d-flex flex-column gap-3 px-5 py-3">
                            <div className="product" >
                                {/* ... (rest of the component) */}
                                <div className="two d-flex justify-content-end gap-1" >
                                    <div className="img1" onClick={handleWishClick}>
                                        <img src={wish} style={{ height: "40px" }} alt="wish" />
                                    </div>
                                    {/* ... (rest of the component) */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Main;










