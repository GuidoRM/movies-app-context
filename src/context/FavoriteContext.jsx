/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import initialMovies from "../consts/initialMovies";

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
    const [indexFavoriteMovies, setIndexFavoriteMovies] = useState([])
    const [favoriteMoviesList, setFavoriteMoviesList] = useState([])
    const addFavoriteList = (id) => {
        if (indexFavoriteMovies.includes(id)){
            const removeIndex = indexFavoriteMovies.filter((index) => {
                return index != id
            })

            setIndexFavoriteMovies(removeIndex)
        }
        else{
            setIndexFavoriteMovies([...indexFavoriteMovies, id])
        }
    }

    useEffect(()=>{
        const favoriteMoviesListFilter = initialMovies?.filter((movie)=>{
            return indexFavoriteMovies.includes(movie.id)
        })
        setFavoriteMoviesList(favoriteMoviesListFilter)
    },[indexFavoriteMovies])
    

    const data = {addFavoriteList, favoriteMoviesList, indexFavoriteMovies}

    return (
        <FavoriteContext.Provider value={data}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteProvider};
export default FavoriteContext;