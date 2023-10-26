import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className={"header header__sect"}>
      <h1 className={"header__title title site__title"}>{props.title}</h1>
    </header>
  );
}

export default Header;
