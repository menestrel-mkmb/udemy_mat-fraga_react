import { useCallback, useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { lists, toggleObjFromList} from '../../list';
import PageTitle from "../../components/PageTitle/PageTitle";

import "./Favorites.css";

export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const favList = localStorage.getItem(lists.favorites);
        const parsedList = JSON.parse(favList) || [];
        setMovies(parsedList);
    }, []);

    const favMovie = useCallback((movie) => {
        toggleObjFromList(lists.favorites, movie);
    }, []);

    return(
    <main className={"main__sect main"}>
        <PageTitle title="Favoritos" page="favorites" />
        <article className={"favorites__artc movies__artc movies container"}>
            {movies.length === 0 ? (<p>Não foi encontrado nenhum filme salvo.</p>) :
                movies.map(
                (movie, index) => {
                    return(
                        <section key={movie.id}
                            className={`movie__sect movie-${index}`}
                        >
                            <button className={`obj__btn favorite__btn`}
                                onClick={ () => {favMovie(movie)}}
                            >
                                F
                            </button>
                            <Card key={movie.id}
                                index={index} movie={movie}
                                lang={movie.original_lang}
                            />
                        </section>
                    )
                }
            )}
        </article>
    </main>);
}