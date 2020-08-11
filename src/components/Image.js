import React, {useState, useContext} from 'react';

import {Context} from '../Context'

function Image({img}) {

    const [ isHovered, setIsHovered ] = useState(false);

    const {toggleFavorite} = useContext(Context)

    // const toggleFavorite = event => {
    //     img.isFavorite = !img.isFavorite
    //     console.log(img.id,img.isFavorite)
    // }


    const heartIcon = isHovered ? 
        <i  className="ri-heart-line favorite" 
            onClick={() => toggleFavorite(img.id)}></i> :
        null

    const cartIcon = isHovered ? 
        <i className="ri-add-circle-line cart"></i>  :
        null

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
            
            {heartIcon}
            {cartIcon}

        </div>

    );

};

export default Image;