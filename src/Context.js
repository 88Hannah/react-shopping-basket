import React, {useState, useEffect} from 'react';
import * as photoData from './images.json'; 

import useSessionStorage from './hooks/useSessionStorage';

const Context = React.createContext();




function ContextProvider({children}) {

    const [cartItems, setCartItems] = useSessionStorage('storedCartItems');

    const [allPhotos, setAllPhotos] = useSessionStorage('storedPhotoArray');
    // const [allPhotos, setAllPhotos] = useState([]);


    useEffect(() => {
        console.log(allPhotos)
        if (allPhotos.length === 0) {
            console.log("I'm in!")
            setAllPhotos(photoData.images);
        };
    }, []);



    const toggleFavorite = imgId => {

        const updatedArray = allPhotos.map(photo => {
            if(photo.id === imgId) {
                photo.isFavorite = !photo.isFavorite;
            };
            return photo;
        });

        setAllPhotos(updatedArray);
    };

    const addToCart = newItem => {
        setCartItems(prevItems => [...prevItems, newItem]);
    };

    const removeFromCart = removedId => {
        setCartItems(prevItem => prevItem.filter(img => img.id !== removedId));
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <Context.Provider value={{
            allPhotos,
            cartItems,
            toggleFavorite,
            addToCart,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
};

export {ContextProvider, Context};