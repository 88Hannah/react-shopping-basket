import React, {useState, useContext} from 'react';

import {Context} from '../Context';

function CartItem({item}) {

    const {removeFromCart} = useContext(Context)

    const [binType, setBinType] = useState("line")

    const formattedPrice = item.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});






    return (
        <div className="cart-item">
            <div ></div>
            
            <i  className={`ri-delete-bin-${binType} ri-2x`}
                onMouseEnter={() => setBinType('fill')}
                onMouseLeave={() => setBinType('line')}
                onClick={() => removeFromCart(item.id)}></i>
            <div className="cart-img">
                <img src={item.url} />
            </div>
            <p className="price">{formattedPrice}</p>
        </div>
    )
};

export default CartItem 