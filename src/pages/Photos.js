import React, {useContext, useRef} from 'react';
import {Context} from '../Context';

import Image from '../components/Image';

function Photos() {

    const {allPhotos, clearFavorites, addAllFavorites, emptyCart} = useContext(Context);

    const focusRef = useRef(null);

    const imagesElement = allPhotos.map(photo => (
        <Image key={photo.id} img={photo} />
    ));

    return (
        <main className="photos-page" ref={focusRef}>
            <div className='photos'>
                {imagesElement}
            </div>
            <div className="flex photo-page-buttons">
                <button className="photo-page-button" onClick={() => clearFavorites(focusRef.current)}>Clear Favourites</button>
                <button className="photo-page-button" onClick={addAllFavorites}>Add Favourites to Cart</button>
                <button className="photo-page-button" onClick={emptyCart}>Clear Cart</button>
            </div>
        </main>
    );
};

export default Photos;
