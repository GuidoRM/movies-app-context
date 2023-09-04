import initialMovies from "../consts/initialMovies"

export const MoviesList = () => {
    return (
        <>
            <main className="grid grid-cols-3 px-12 py-12 gap-12">
                {initialMovies.map((movie) => (
                    <article key={movie.id}>
                        <img src={movie.imageUrl} />
                        <h3>{movie.title}</h3>
                    </article>
                ))}

            </main>
        </>
    )
}
