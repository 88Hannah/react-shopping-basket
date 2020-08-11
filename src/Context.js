import React, {useState, useEffect} from 'react';

import * as photoData from './images.json'; 

const Context = React.createContext();

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        setAllPhotos(photoData.images)
    }, [])
    
    // const toggleFavorite = imgId => {

    //     const currentIndex = allPhotos.findIndex(img => img.id === imgId)

    //     setAllPhotos(prevData => {

    //         prevData[currentIndex].isFavorite = !prevData[currentIndex].isFavorite
            
    //         console.log(prevData[currentIndex])

    //         return [...prevData]

            
    //     })

    // }


    const toggleFavorite = imgId => {

        const updatedArray = allPhotos.map(photo => {
            if(photo.id === imgId) {
                photo.isFavorite = !photo.isFavorite
                console.log(photo.id, photo.isFavorite)
            }
            return photo
        })

        setAllPhotos(updatedArray)

    }


    // const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllPhotos(data)
    //         })

    // }, [])

    return (

        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>

    )

}

export {ContextProvider, Context}