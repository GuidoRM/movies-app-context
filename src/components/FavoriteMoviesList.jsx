import { useContext } from "react"
import FavoriteContext from "../context/FavoriteContext"
import { Movies } from "./Movies";

const FavoriteMoviesList = () => {
    const {favoriteMoviesList} = useContext(FavoriteContext);

    return (
        <>
            <h1>Fovorite Movies List</h1>

            <main className="grid grid-cols-3 px-12 py-12 gap-12">
            {console.log(favoriteMoviesList)}
            {
                    favoriteMoviesList?.map((movie) => (
                        <Movies key={movie.id} id={movie.id} title={movie.title} image_url={movie.imageUrl} />
                    ))
                }

            </main>
        </>
    )
}

export default FavoriteMoviesList