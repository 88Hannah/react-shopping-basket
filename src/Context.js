import React, {useEffect} from 'react';
import * as photoData from './images.json'; 

import useSessionStorage from './hooks/useSessionStorage';

const Context = React.createContext();

function ContextProvider({children}) {

    const [cartItems, setCartItems] = useSessionStorage('storedCartItems');

    const [allPhotos, setAllPhotos] = useSessionStorage('storedPhotoArray');

    useEffect(() => {
        if (allPhotos.length === 0) {
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

    const clearFavorites = () => {
        const allPhotosCopy = allPhotos;
        const clearedFavourites = allPhotosCopy.map(item => ({...item, isFavorite: false}));       
        setAllPhotos(clearedFavourites);
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const addAllFavorites = () => {
        
        const allFavorites = allPhotos.filter(photo => photo.isFavorite);

        const photosToAdd = allFavorites.filter(photo => (
            !cartItems.some(item => item.id === photo.id)
        ));
        
        setCartItems(prevItems => ([...prevItems, ...photosToAdd]));
    };

    return (
        <Context.Provider value={{
            allPhotos,
            cartItems,
            toggleFavorite,
            addToCart,
            removeFromCart,
            clearFavorites,
            emptyCart,
            addAllFavorites
        }}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};