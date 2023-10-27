import React, { useCallback, useEffect, useState } from "react";
import "./style.css";

import Post from "./components/Post/Post";
import Header from "./components/Header/Header";

import staticObj from "./data.json";

function App() {
  const [obj, setObj] = useState([]);

  const fetchApi = useCallback(() => {
    const baseURL = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(baseURL)
      .then((r) => r.json())
      .then((json) => setObj(json));
  }, []);

  useEffect(fetchApi, [obj]);

  obj === undefined && setObj(staticObj);

  return (
    <div className="App">
      <Header title="ReactNutri" />
      <main>
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
      </main>
    </div>
  );
}

export default App;
