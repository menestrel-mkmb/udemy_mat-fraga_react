import React from "react";

function Person(props) {
    return (
    <>
        {/* <img src="" alt="" /> */}
        <h4>{`[${props.id}] ${props.name}:`}</h4>
        <h3 className="person__subtitle subtitle">Olá, sou o(a) {props.name}</h3>
        <p>Trabalho na área de {props.job}</p>
        <p>{`${props.likes} curtidas |
        ${props.comments} comentários`}</p>
    </>);
}

export default Person;