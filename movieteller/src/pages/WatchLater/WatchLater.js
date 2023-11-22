import { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";

import "./WatchLater.css";
import { lists, toggleObjFromList } from "../../list";

function WatchLater() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const watchList = localStorage.getItem(lists.watchLater);
        const parsedList = JSON.parse(watchList) || [];
        setMovies(parsedList);
    }, []);

    const favMovie = useCallback((movie) => {
        toggleObjFromList(lists.favorites, movie);
    }, []);

    const watchMovie = useCallback((movie) => {
        setMovies(toggleObjFromList(lists.watchLater, movie));
    }, []);

    return(
    <main className={"main__sect main"}>
        <PageTitle title="Assistir mais tarde" page="watch-later" />
        <article className={"watch-later__artc movies__artc movies container"}>
            {movies.length === 0 ? (<p>Não foi encontrado nenhum filme salvo.</p>) :
                movies.map(
                (movie, index) => {
                    return(
                        <section key={movie.id}
                            className={`movie__sect movie-${index}`}
                        >
                            <button className={`obj__btn watch-favorite__btn`}
                                onClick={ () => {favMovie(movie)}}
                            >
                                F
                            </button>
                            <button className={`obj__btn delete__btn`}
                                onClick={ () => {watchMovie(movie)}}
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