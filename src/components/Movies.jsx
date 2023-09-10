import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
export const Movies = ({ id, title, image_url }) => {
    const { addFavoriteList, indexFavoriteMovies } = useContext(FavoriteContext);
    const location = useLocation()

    return (
        <>
            {console.log("dsad", location.pathname)}
            <article className="flex aligns-center justify-center relative border rounded-xl border-neutral-600 h-fit">
                <section style={{ height: "350px" }} className="w-full overflow-hidden rounded-xl ">
                    <img className="h-full w-full object-cover hover:scale-105 transition-all duration-700 ease-in-out" src={image_url} />
                </section>
                <section className="absolute flex flex-wrap gap-4 aligns-center justify-center bottom-10 w-full backdrop-blur-sm text-white text-1xl px-1 py-3 mx-auto text-center">
                    <h3 className="self-center font-semibold">{title}</h3>
                    <button onClick={()=>{addFavoriteList(id)}} className={`px-2 rounded-full ${location.pathname == "/favorites"? "bg-red-600":indexFavoriteMovies.includes(id)?"bg-green-600":"bg-zinc-600"} border-2 border-white`}>{location.pathname == "/favorites"? "Eliminar":"Favorite"}</button>
                </section>
            </article>
        </>
    )
}
