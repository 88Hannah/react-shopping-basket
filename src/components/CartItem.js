import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import useIsHovered from '../hooks/useIsHovered';
import {Context} from '../Context';

function CartItem({item}) {

    const {removeFromCart} = useContext(Context);

    const [isHovered, hoverRef] = useIsHovered();

    const formattedPrice = item.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});

    const binType = isHovered ? "fill" : "line"; 

    return (
        <div className="cart-item">
            <i  className={`ri-delete-bin-${binType} ri-2x delete`}
                ref={hoverRef}
                onClick={() => removeFromCart(item.id)}></i>
            <div className="cart-img">
                <img src={item.url} alt='item in cart'/>
            </div>
            <p className="price">{formattedPrice}</p>
        </div>
    );
};

CartItem.propTypes = {

    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        price: PropTypes.number
    })

};

export default CartItem;