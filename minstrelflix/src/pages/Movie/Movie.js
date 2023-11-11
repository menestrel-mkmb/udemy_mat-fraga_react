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
        <h2>Filme</h2>
    </main>);
}