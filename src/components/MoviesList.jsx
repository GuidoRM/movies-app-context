import initialMovies from "../consts/initialMovies"
import { Movies } from "./Movies"

export const MoviesList = () => {

    return (
        <>
            <main className="grid grid-cols-3 px-12 py-12 gap-12">

                {
                    initialMovies.map((movie) => (
                        <Movies key={movie.id} id={movie.id} title={movie.title} image_url={movie.imageUrl} />
                    ))
                }

            </main>
        </>
    )
}
