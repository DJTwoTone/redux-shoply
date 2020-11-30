import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { calcTotalQty } from './helpers';

function Navbar () {
    const cartCount = useSelector(st => calcTotalQty(st.cartItems));
    const cartValue = useSelector(st => st.cartTotal);
    const units = cartCount === 1 ? "item in your cart" : "items in your cart";

    return (
        <nav className="navbar navbar-dark bg-info">
            <Link to="/" className="navbar-brand text-dark">SHOPLY</Link>
            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                    <span className="navbar-text">
                        {cartCount} {units} (${cartValue})
                    </span>
                </li>
                <li className="nav-item">
                    <Link to='/cart' className="nav-link">
                        Go To Cart
                    </Link>
                </li>
            </ul>
        
        </nav>
    )
}

export default Navbar;