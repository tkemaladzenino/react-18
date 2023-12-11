
// Header.jsx

import { Outlet } from 'react-router-dom';
import heart from './images/hart.png';
import cart from './images/icon3.png';
import "./css/style.css";

function Header({ selectedProducts }) {
    return (
        <div className="container-fluid layout-body">
            <header className="hdr d-flex flex-row gap align-items-center px-5" style={{ justifyContent: 'space-between' }}>

                <ul className="menu d-none d-md-block d-lg-block d-flex pt-3">
                    <li>Home
                    </li>
                    <li>Contact
                    </li>
                </ul>
                <div className="icons d-flex flex-row gap-1">
                    <div className="icon1-div">
                        <img src={heart} style={{ paddingLeft: '6px', height: "40px", color: 'red' }} alt="github" />
                    </div>

                    <div className="e-div" style={{ paddingRight: '20x' }}>

                        <div className="ellipse-d" style={{ position: 'absolute', right: '60px', zIndex: 9 }}>
                            <span className="selected-products-count" style={{ position: 'absolute', zIndex: 2 }}>
                                {selectedProducts}
                            </span>
                        </div>

                        <img src={cart} style={{ paddingLeft: '6px', height: "40px" }} alt="github" />
                    </div>
                </div>
            </header>

            <Outlet />
        </div>
    );
}

export default Header;





































