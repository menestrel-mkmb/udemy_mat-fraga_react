import { useEffect, useState } from "react";
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
            
            response.status === 200 && setMovies(response.data.results);
            console.log(response.data.results);
        }

        loadMoviesFromApi();
    }, []);


    return(
    <main>
        <p>Home</p>
    </main>)
}