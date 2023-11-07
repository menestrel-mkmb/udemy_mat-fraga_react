import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
// import Error404 from "./pages/Error404/Error404";
// import Favorites from "./pages/Favorites/Favorites";

function RoutesApp() {
    return(<BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    </BrowserRouter>);
}

export default RoutesApp;