import { useContext } from "react"
import UserContext from "../context/UserContext"
import { NavLink } from "react-router-dom"
import FavoriteContext from "../context/FavoriteContext"

const Header = () => {
    const {user, login, logout} = useContext(UserContext)
    const {favoriteMoviesList} = useContext(FavoriteContext);
    return (
        <>
            <header className="flex justify-between bg-zinc-900 text-white px-12 py-4">
                <h1 className="text-3xl">{user ? `Bienvenido ${user.name}!` : "¡Bienvenidos!"}</h1>
                <NavLink to={"/"} className={({isActive})=> isActive?`bg-zinc-600`:`bg-red`}>Ejemplo</NavLink>
                <NavLink to={"/favorites"} className={({isActive})=> isActive?`bg-zinc-600`:`bg-red`}>{favoriteMoviesList.length}Ejemplo</NavLink>

                {
                    user ?
                        <button onClick={logout} className="rounded-full bg-sky-500 hover:bg-sky-700 px-2 py-1 text-sm">Salir de la cuenta</button>
                    :
                        <button onClick={login} className="rounded-full bg-sky-500 hover:bg-sky-700 px-2 py-1 text-sm">Iniciar sesión</button>
                }
            </header>
        </>
    )
}

export default Header