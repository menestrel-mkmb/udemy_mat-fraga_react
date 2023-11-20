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

    const saveList = (string, obj) => {
        localStorage.setItem(string, JSON.stringify(obj));
    }

    const addFavorite = (index) => {
        alert(`fav ${index}`);
    }

    const deleteMovie = (index) => {
        const tempMovieList = movies.filter(
            (movie, movieIndex) => movieIndex !== index
        )
        setMovies(tempMovieList);
        saveList("@toWatchList", tempMovieList);

    }

    return(
    <main className={"main__sect main"}>
        <h2 className={"watch-later__title"}>Assistir mais tarde</h2>
        <article className={"watch-later__artc movies__artc movies container"}>
            {movies.length === 0 ? (<p>"Não foi encontrado nenhum filme salvo."</p>) :
                movies.map(
                (movie, index) => {
                    return(
                        <section key={movie.id}
                            className={`movie__sect movie-${index}`}
                        >
                            <button className={`obj__btn favorite__btn`}
                                onClick={ () => {addFavorite(index)}}
                            >
                                F
                            </button>
                            <button className={`obj__btn delete__btn`}
                                onClick={ () => {deleteMovie(index)}}
                            >
                                X
                            </button>
                            <Card
                                index={index} movie={movie}
                                lang={movie.original_lang}
                            />
                        </section>
                    )
                }
            )}
        </article>
    </main>)
}

export default WatchLater;