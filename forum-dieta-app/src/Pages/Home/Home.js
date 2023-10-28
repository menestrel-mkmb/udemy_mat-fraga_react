import React from "react";

import Post from "../../components/Post/Post";

function Home(props) {
    const obj = props.obj !== undefined ? props.obj : props.staticObj;

    return(
    <main className={"main__sect main content"}>
        {obj.map((post) => {
        return (
            <Post
            key={post.id}
            titulo={post.titulo}
            categoria={post.categoria}
            capa={post.capa}
            id={post.id}
            subtitulo={post.subtitulo}
            />
        );
        })}
  </main>);
}

export default Home;