import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import "./Home.css";

import apitmdb, { API_PARAMS, INTERNAL_API_PARAMS } from "../../services/api-tmdb";
import Loading from "../../components/Loading/Loading";

export default function Home() {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMoviesFromApi() {
            const endpointUrl = API_PARAMS.endpoints.nowplaying;

            await apitmdb.get(endpointUrl,
                { params: {
                    api_key: INTERNAL_API_PARAMS.key,
                    language: INTERNAL_API_PARAMS.lang,
                    page: INTERNAL_API_PARAMS.page
                }}
            ).then( (response) => {
                setMovies(response.data.results);
                setLoading(false);
            });
        }

        loadMoviesFromApi();
    }, []);


    if(loading) return <Loading />;


    return(
    <main className={"main__sect main"}>
        <h2 className={"home__title now-playing__title"}>Agora nos cinemas</h2>
        <article className={"now-playing__artc movies__artc movies container"}>
            {movies.map( (movie, index) => {
                return(<Card key={movie.id}
                            index={index} movie={movie}
                            lang={movie.original_lang}
                        />);
            })}
        </article>
    </main>)
}