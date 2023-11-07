import { useParams } from "react-router-dom";
import "./Movie.css";

export default function Movie() {
    const { movieId } = useParams();

    return(
    <main>
        <h2>Movie {movieId}</h2>
    </main>);
}