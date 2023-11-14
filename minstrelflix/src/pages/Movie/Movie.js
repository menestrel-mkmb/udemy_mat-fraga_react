import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Movie.css";

import Loading from "../../components/Loading/Loading";

import apitmdb, { API_PARAMS, INTERNAL_API_PARAMS } from "../../services/api-tmdb";
import { urlTitle } from "../../services/imdb";
import { urlSearchQuery } from "../../services/youtube";

export default function Movie() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchMovie () {
            const endpointUrl = API_PARAMS.endpoints.movies + movieId;

            await apitmdb.get(endpointUrl,
                { params: {
                    api_key: INTERNAL_API_PARAMS.key,
                    language: INTERNAL_API_PARAMS.lang,
                }}
            ).then((response) => {
                setMovie(response.data);
                setLoading(false);
            }).catch( (response) => {
                console.log(response);
                response.response.status === 404 && navigate("/notfound", { replace: true });
            }
            );
        }

        fetchMovie();
    }, [movieId, navigate]);

    if(loading) return(<Loading />);

    return(
    <main className={'main__sect main'}>
        <img className={"backdrop__img"}
            src={API_PARAMS.image_base_url
                + API_PARAMS.image_original_size
                + movie.backdrop_path}
            alt=" "
        />
        <article className={"movie__artc"}>
            <h2 className={"movie__title"}>{movie.title}</h2>
            <section className={"container general-info__sect"}>
                <img className={"poster__img"}
                    src={API_PARAMS.image_base_url
                        + API_PARAMS.image_w300_size
                        + movie.poster_path}
                    alt={"Pôster do filme " + movie.title}
                />
                <section className={"general-txt__sect"}>
                    <p className={"overview__txt"} >{movie.overview.length > 0 ? movie.overview : "Não foi encontrada descrição."}</p>
                    <p className={"field__txt"}>Título original: 
                        <strong className={"info__txt"}> {movie.original_title}</strong>
                    </p>
                    <p className={"field__txt"}>Gênero(s): 
                        <strong className={"info__txt"}>{movie.genres.map(
                            (genre, index, arr) => `${genre.name}${index < arr.length-1 ? ", " : "."}`)}
                        </strong>
                    </p>
                    <p className={"field__txt"}>Data de lançamento:
                        <strong className={"info__txt"}>{movie.release_date}</strong>
                    </p>
                    <p className={"field__txt"}>Nota do público: 
                        <strong className={"info__txt"}>{movie.vote_average}/10 ({movie.vote_count})</strong>
                    </p>
                    <p className={"field__txt"}>Links externos
                        <strong className={"info__txt links__sect"}>
                            <a
                                href={urlTitle + movie.imdb_id}
                                target={"_blank"} rel="noreferrer"
                            >
                                Página no IMDB
                            </a>
                            <a
                                href={urlSearchQuery + movie.original_title + " Oficial trailer"}
                                target={"_blank"} rel="noreferrer external"
                            >
                                Youtube - Trailer Oficial
                            </a>
                            <a
                                href={urlSearchQuery + "Trailer " + movie.title + " legendado"}
                                target={"_blank"} rel="noreferrer external"
                            >
                                Youtube - Trailer Legendado
                            </a>
                        </strong>
                        
                    </p>

                </section>
            </section>
        </article>
    </main>);
}