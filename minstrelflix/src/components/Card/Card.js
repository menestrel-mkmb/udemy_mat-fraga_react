import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
    const movie = props.movie;
    const index = props.index;

    const imgBaseURL = "https://image.tmdb.org/t/p/w300";

    return(
    <section className={`movie__sect movie movie-${index} card`}>
        <Link to={`/movie/${movie.id}`}>
            <h2>{movie.title}</h2>
            <h3>IMDB ID: {movie.id}</h3>
            <img className={"movie__img"}
                src={ imgBaseURL + movie.poster_path}
            />
        </Link>
    </section>);
}

export default Card;