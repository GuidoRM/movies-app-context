/* eslint-disable react/prop-types */
export const Movies = ({ title, image_url }) => {
    const isFavorite = true

    return (
        <>
            <article className="flex aligns-center justify-center relative border rounded-xl border-neutral-600 h-fit">
                <section style={{ height: "350px" }} className="w-full overflow-hidden rounded-xl ">
                    <img className="h-full w-full object-cover hover:scale-105 transition-all duration-700 ease-in-out" src={image_url} />
                </section>
                <section className="absolute flex flex-wrap gap-4 aligns-center justify-center bottom-10 w-full backdrop-blur-sm text-white text-1xl px-1 py-3 mx-auto text-center">
                    <h3 className="self-center font-semibold">{title}</h3>
                    <button className={`px-2 rounded-full ${isFavorite?"bg-zinc-600":""} border-2 border-white`}>Favorite</button>
                </section>
            </article>
        </>
    )
}
