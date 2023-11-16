import { Link } from "react-router-dom";
import "./Card.css";

import { API_PARAMS } from "../../services/api-tmdb";

function Card(props) {
    const movie = props.movie;
    const index = props.index;
    const lang = props.lang;

    return(
    <section className={`movie__sect movie movie-${index} card`}>
        <Link to={`/movie/${movie.id}`}>
            <img className={"movie__img"}
                src={ API_PARAMS.image_base_url + API_PARAMS.image_w300_size + movie.poster_path}
                alt={`Poster Oficial do filme ${movie.title}`}
            />
            <section className={"movie-text__sect"}>
                <h2 className={"movie__title"}>{movie.title}</h2>
                { !(lang === 'pt') &&<h3 className={"original__title"}>{movie.original_title}</h3>}
                <span className={"details__txt"}>Clique para acessar</span>
            </section>
        </Link>
    </section>);
}

export default Card;