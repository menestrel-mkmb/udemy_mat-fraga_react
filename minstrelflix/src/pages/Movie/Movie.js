import { useParams } from "react-router-dom";
import "./Movie.css";

export default function Movie() {
    const { movieId } = useParams();

    return(
    <main>
        <h2>Movie</h2>
    </main>);
}