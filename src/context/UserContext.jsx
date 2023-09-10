import { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = { id: 1, name: "Guido", favoriteMovies: [1, 2, 3] }

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(initialUser)
    const login = () => {
        setUser(initialUser)
    }

    const logout = () => {
        setUser(null)
    }
    const data = { user,login,logout }
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;