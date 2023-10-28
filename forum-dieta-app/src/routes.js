import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Error404 from "./Pages/Error404/Error404";
import App from "./App";

function RoutesApp() {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> } />
            <Route parth="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="*" element={ <Error404 /> } />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;