import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../Context';

function Header() {

    const {cartItems} = useContext(Context);

    const cartType = cartItems.length === 0 ? "line" : "fill";

    return (
        <header>
            <Link to="/">
                <h2 className="home-link">Photo Gallery</h2>
            </Link>

            <Link to="/cart" className="checkout-link">
                {cartItems.length ? <p className="items-in-cart">{cartItems.length}</p> : null}
                <i className={`ri-shopping-cart-${cartType} ri-fw ri-2x cart-icon`}></i>
            </Link>
        </header>
    );
};

export default Header;
