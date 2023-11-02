import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
    const { postId } = useParams();
    const [obj, setObj] = useState([]);

    const fetchApi = useCallback(() => {
        const baseURL = "https://sujeitoprogramador.com/rn-api/?api=posts";
        
        fetch(baseURL)
        .then((r) => r.json())
        .then((obj) => setObj(obj.find( (post) => String(post.id) === postId )));
    }, [postId]);

    useEffect(fetchApi, [fetchApi]);

    return(<main className={"main__sect main content"}>
        {
        <article>
            <h2>{obj.titulo}</h2>
            <img src={obj.capa} alt="Illustrative for post" />
            <p>Categoria: {obj.categoria} ID: {obj.id}</p>
            <p>{obj.subtitulo}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
        }
    </main>);
}

export default PostDetails;