import React from "react";
import './Navbar.css'

function NavbarComponent({ totalPrice }) {
    return (
        <div className="container">
            <nav>
                <div className="d-flex align-center">
                    <p>Pizzeria Mamma Mia</p>
                </div>
                <ul>
                    <li><a className="total-price" href="">Total: ${totalPrice.toFixed(2)}</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavbarComponent;