import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function NavbarComponent({ totalPrice }) {
    return (
        <div className="container">
            <nav>
                <div className="d-flex align-center">
                <Link to="/" className="pizzeria-link">Pizzeria Mamma Mia</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/order-detail" className="total-price">
                            Total: ${totalPrice ? totalPrice.toFixed(2) : '0.00'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavbarComponent;