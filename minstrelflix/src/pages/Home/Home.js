import { useEffect, useState } from "react";
import "./Home.css";
import apitmdb, { API_PARAMS, INTERNAL_API_PARAMS } from "../../services/api-tmdb";

export default function Home() {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMoviesFromApi() {
            const endpointUrl = API_PARAMS.endpoints.nowplaying;
            
            console.log(endpointUrl);

            const response = await apitmdb.get(endpointUrl,
                { params: {
                    api_key: INTERNAL_API_PARAMS.key,
                    language: INTERNAL_API_PARAMS.lang,
                    page: INTERNAL_API_PARAMS.page
                }}
            );
            
            console.log(response);
            return response;
        }

        setMovies(loadMoviesFromApi());
        console.log(movies);
    }, []);

    return(
    <main>
        <p>Home</p>
    </main>)
}