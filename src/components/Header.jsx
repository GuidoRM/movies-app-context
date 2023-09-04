const Header = () => {
    const user = {
        name: "Guido"
    }

    return (
        <>
            <header>
                <h1 className="underline">{user ? `Bienvenido ${user.name}!` : "¡Bienvenidos!"}</h1>

                {
                    user ?
                        <button>Salir de la cuenta</button>
                    :
                        <button>Iniciar sesión</button>
                }
            </header>
        </>
    )
}

export default Header