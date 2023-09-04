const Header = () => {
    const user = {
        name: "Guido"
    }

    return (
        <>
            <header className="flex justify-between bg-zinc-900 text-white px-12 py-4">
                <h1 className="text-3xl">{user ? `Bienvenido ${user.name}!` : "¡Bienvenidos!"}</h1>

                {
                    user ?
                        <button className="rounded-full bg-sky-500 hover:bg-sky-700 px-2 py-1 text-sm">Salir de la cuenta</button>
                    :
                        <button>Iniciar sesión</button>
                }
            </header>
        </>
    )
}

export default Header