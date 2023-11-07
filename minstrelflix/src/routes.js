import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Favorites from "./pages/Favorites/Favorites";
import Movie from './pages/Movie/Movie';

function RoutesApp() {
    return(<BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/favorites" element={ <Favorites /> } />
            <Route path="/movie/:movieId" element={ <Movie /> } />

            <Route path="/*" element={ <Error404 /> } />
        </Routes>
    </BrowserRouter>);
}

export default RoutesApp;