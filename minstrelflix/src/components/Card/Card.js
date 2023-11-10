import { Link } from "react-router-dom";
import "./Card.css";

import { API_PARAMS } from "../../services/api-tmdb";

function Card(props) {
    const movie = props.movie;
    const index = props.index;


    return(
    <section className={`movie__sect movie movie-${index} card`}>
        <Link to={`/movie/${movie.id}`}>
            <h2>{movie.title}</h2>
            <h3>IMDB ID: {movie.id}</h3>
            <img className={"movie__img"}
                src={ API_PARAMS.image_base_url + API_PARAMS.image_w300_size + movie.poster_path}
            />
        </Link>
    </section>);
}

export default Card;