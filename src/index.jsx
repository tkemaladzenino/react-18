
// index.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import ProductDetails from './ProductDetails';




const App = () => {
    const [selectedProducts, setSelectedProducts] = useState(0);

    const updateSelectedProducts = (count) => {
        setSelectedProducts(count);
    };
    return (
        <Router>
            <>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header selectedProducts={selectedProducts} />
                                <Main updateSelectedProducts={updateSelectedProducts} />
                            </>
                        }
                    />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                </Routes>
            </>
        </Router>
    );
};

export default App;


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);





