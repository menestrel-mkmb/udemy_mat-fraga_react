import React from "react";

function Card(props) {
    const movie = props.movie;
    const index = props.index;
    console.log(movie);

    return(
    <section className={`movie__sect movie-${index} card`}>
        <h2>{index}: {movie.title}</h2>
        <h3>IMDB ID: {movie.id}</h3>
    </section>);
}

export default Card;