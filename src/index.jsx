
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';


import Main from './Main';



const App = () => {


    return (
        <>
            <Header />
            <Main />

        </>
    );
};

export default App;


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);





