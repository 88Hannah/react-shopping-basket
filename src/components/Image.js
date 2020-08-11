import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';

import {Context} from '../Context'

function Image({img}) {

    const [ isHovered, setIsHovered ] = useState(false);

    const {cartItems, toggleFavorite, addToCart, removeFromCart} = useContext(Context)

    const heartIcon = () => {
        if(img.isFavorite) {
            return <i   className="ri-heart-fill favorite"
                        onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return <i   className={`ri-heart-line favorite`} 
                        onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    const isInCart = cartItems.some(item => item.id === img.id)

    const cartIcon = () => { 
        if(isInCart) {
            return <i   className="ri-shopping-cart-fill cart"
                        onClick={() => removeFromCart(img.id)}></i>
        } else if (isHovered) {
            return <i   className="ri-add-circle-line cart"
                        onClick={() => addToCart(img)}></i>
        }
    }

    return (

        <div 
            className={`${img.size} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={img.url} 
                className='image-grid' 
            />
            
            {heartIcon()}
            {cartIcon()}

        </div>

    );

};

Image.propTypes = {

    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        size: PropTypes.string,
        price: PropTypes.number,
        isFavorite: PropTypes.bool
    })

}

export default Image;