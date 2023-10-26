import React from "react";
import "./style.css";

import Post from "./components/Post/Post";
import Header from "./components/Header/Header";

import obj from "./data.json";

function App() {
  return (
    <div className="App">
      <Header title="ReactNutri" />
      <main>
        {obj.map((post) => {
          return (
            <Post
              titulo={post.titulo}
              categoria={post.categoria}
              capa={post.capa}
              id={post.id}
              subtitulo={post.subtitulo}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
