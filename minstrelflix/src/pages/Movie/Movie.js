import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

import apitmdb, { API_PARAMS, INTERNAL_API_PARAMS } from "../../services/api-tmdb";
import Loading from "../../components/Loading/Loading";

export default function Movie() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchMovie () {
            const endpointUrl = API_PARAMS.endpoints.movies + movieId;

            const response = await apitmdb.get(endpointUrl,
                { params: {
                    api_key: INTERNAL_API_PARAMS.key,
                    language: INTERNAL_API_PARAMS.lang,
                }}
            );

            console.log(response);
            response.status === 200 && setMovie(response.data);
            response.status === 200 && setLoading(false);
        }

        fetchMovie();
    }, []);

    if(loading) return(<Loading />);

    return(
    <main className={'main__sect main'}>
        <img className={"backdrop__img"}
            src={API_PARAMS.image_base_url
                + API_PARAMS.image_original_size
                + movie.backdrop_path}
        />
        <article className={"movie__artc"}>
            <h2 className={"movie__title"}>{movie.title}</h2>
            <section className={"container general-info__sect"}>
                <img className={"poster__img"}
                    src={API_PARAMS.image_base_url
                        + API_PARAMS.image_w300_size
                        + movie.poster_path}
                />
                <section className={"general-txt__sect"}>
                    <p>{movie.overview}</p>
                    <h3>Título original: {movie.original_title}</h3>
                </section>
            </section>
        </article>
    </main>);
}