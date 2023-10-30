import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header className={"header header__sect"}>
      <h1 className={"header__title title site__title"}>
        <Link to="/">
          {props.title}
        </Link>
      </h1>
        
      <nav className={"header__nav nav menu"}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
