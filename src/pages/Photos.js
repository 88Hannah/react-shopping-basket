import React, {useContext} from 'react';
import {Context} from '../Context';

import Image from '../components/Image';

function Photos() {

    const {allPhotos} = useContext(Context);

    const imagesElement = allPhotos.map(photo => (
        <Image key={photo.id} img={photo} />
    ));

    return (
        <main className='photos'>
            {imagesElement}
        </main>
    );
};

export default Photos;
