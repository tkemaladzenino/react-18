
//Main.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import "./css/style.css";

import wish from './images/wish.png';
import hart from './images/hart.png';

function Main({ updateSelectedProducts }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedProducts] = useState(0); // New state for selected products


    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                const productsData = response.data.products; // Access the "products" key in the response
                setProducts(productsData);
                setLoading(false);
            })

    }, []);

    const handleWishClick = () => {
        // Increment the selected products count on "Wish" click
        updateSelectedProducts(selectedProducts + 1);
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
            <div className="row">
                <div className="col-12 our-text pt-3">
                    <h1>Our Latest Products</h1>
                </div>
            </div>

            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row product-row">
                    {row.map(product => (
                        <div key={product.id} className="col-12 col-lg-4 d-flex flex-column gap-3 px-5 py-3">
                            <div className="product" >
                                <div className="image" style={{ position: 'relative' }}>
                                    <img src={product.thumbnail} alt={product.title} />
                                </div>
                                <div className="info">
                                    <div className="title">{product.title}</div>
                                    <div className="price">${product.price}</div>
                                    <div className="rating">{product.rating}</div>

                                    <Link to={`/product/${product.id}`}>Details ...</Link>
                                    {/* Link to ProductDetails */}

                                </div>
                                <div className="two d-flex justify-content-end gap-1" >
                                    <div className="img1" onClick={handleWishClick}>
                                        <img src={wish} style={{ height: "40px" }} alt="github" />
                                    </div>
                                    <div className="img2">
                                        <img src={hart} style={{ height: "40px" }} alt="github" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            <Outlet />
        </div>
    );
}

export default Main;






































