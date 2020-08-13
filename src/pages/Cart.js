import React, {useState, useContext} from 'react';
import {Context} from '../Context';

import CartItem from '../components/CartItem';

function Cart() {

    const {cartItems, emptyCart} = useContext(Context);
    
    const [buttonText, setButtonText] = useState("Place Order");
    const [cartMessage, setCartMessage] = useState('There are no items in your cart');

    const cartContent = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));
    
    let total = 0;

    cartItems.forEach(item => {
        total += item.price;
    });

    const formattedTotal = total.toLocaleString('en', {style: 'currency', currency: 'GBP'});

    const placeOrder = () => {
        if(cartItems.length > 0) {
            setButtonText("Ordering ...");
            setTimeout(() => {
                setCartMessage('Your order has been placed');
                setButtonText('Place Order');
                emptyCart();
            }, 2000);
        };
    };

    return (
        <main className="cart-page">
            <h1 className="cart-page-heading">Check Out</h1>
            {cartContent}
            { 
                cartItems.length > 0 ?
                <>
                    <hr style={{marginTop:"20px"}}/>
                    <div className="flex">
                        <button className="" onClick={emptyCart}>Clear Cart</button>
                        <p className='total-cost'>Total: {formattedTotal}</p> 
                    </div>
                    <button 
                        className='order-button'
                        onClick={placeOrder}
                    >
                        {buttonText}
                    </button>
                </> : 
                <p className="cart-message">{cartMessage}</p>
            }    
        </main>
    );
};

export default Cart;