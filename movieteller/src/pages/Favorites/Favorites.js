import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import "./Favorites.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const favList = localStorage.getItem("@favoriteList");
        const parsedList = JSON.parse(favList) || [];
        setMovies(parsedList);
    }, []);

    return(
    <main className={"main__sect main"}>
        <PageTitle title="Favoritos" page="favorites" />
        <article className={"favorites__artc movies__artc movies container"}>
            {movies.length === 0 ? (<p>Não foi encontrado nenhum filme salvo.</p>) :
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
    </main>);
}