import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import "./Home.css";

import apitmdb, { API_PARAMS, INTERNAL_API_PARAMS } from "../../services/api-tmdb";

export default function Home() {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMoviesFromApi() {
            const endpointUrl = API_PARAMS.endpoints.nowplaying;

            const response = await apitmdb.get(endpointUrl,
                { params: {
                    api_key: INTERNAL_API_PARAMS.key,
                    language: INTERNAL_API_PARAMS.lang,
                    page: INTERNAL_API_PARAMS.page
                }}
            );
            // console.log(response);
            response.status === 200 && setMovies(response.data.results);
        }

        loadMoviesFromApi();
    }, []);


    return(
    <main class={"main__sect main"}>
        <h2 className={"home__title now-playing__title"}>Agora nos cinemas</h2>
        <article className={"now-playing__artc movies__artc movies container"}>
            {movies.map( (movie, index) => {
                return(<Card movie={movie} index={index} key={index} />);
            })}
        </article>
    </main>)
}