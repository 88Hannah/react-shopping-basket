import React, {useState, useEffect} from 'react';
import * as photoData from './images.json'; 

const Context = React.createContext();

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        setAllPhotos(photoData.images);
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