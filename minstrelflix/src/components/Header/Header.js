import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return(
    <header className="App-header">
        <Link to="/">
            <img src="" alt=" " />
            <h2>Logo</h2>
        </Link>
        <nav className={"menu__nav menu"}>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favoritos</Link>
            <Link to="/watchlater">Assistir mais tarde</Link>
        </nav>
    </header>);
}