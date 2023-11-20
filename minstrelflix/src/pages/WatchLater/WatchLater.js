import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import "./WatchLater.css";
function WatchLater() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const watchList = localStorage.getItem("@toWatchList");
        const parsedList = JSON.parse(watchList);
        setMovies(parsedList);
    }, []);

    return(
    <main className={"main__sect main"}>
        <h2>Assistir mais tarde</h2>
        <article className={"watch-later__artc movies__artc movies container"}>
            {movies.length === 0 ? (<p>"Não foi encontrado nenhum filme salvo."</p>) :
                movies.map(
                (movie, index) => {
                    return(
                        <Card key={movie.id}
                            index={index} movie={movie}
                            lang={movie.original_lang}
                        />
                    )
                }
            )}
        </article>
    </main>)
}

export default WatchLater;