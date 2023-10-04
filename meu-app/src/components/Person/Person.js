import React from "react";

function Person(props) {
    return (
    <>
        <img src="" alt="" />
        <h3 className="person__subtitle subtitle">Olá, sou o(a) {props.name}</h3>
        <p>Trabalho na área de {props.job}</p>
    </>);
}

export default Person;