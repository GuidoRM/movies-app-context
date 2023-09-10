import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { MoviesList } from "./components/MoviesList"
import { FavoriteProvider } from "./context/FavoriteContext"
import { UserProvider } from "./context/UserContext"
import FavoriteMoviesList from "./components/FavoriteMoviesList"

function App() {
  return (
    <>
      <UserProvider>
        <FavoriteProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/favorites" element={<FavoriteMoviesList />} />
          </Routes>
        </FavoriteProvider>
      </UserProvider>
    </>
  )
}

export default App
