import React from "react";
import "./style.css";

import Header from "./components/Header/Header";

import obj from "./data.json";

function App() {
  return (
    <div className="App">
      <Header title="ReactNutri" />
      <main>
        {obj.map((post) => {
          return (
            <section key={post.id} className={"post__sect"}>
              <img src={post.capa} alt="" />
              <section>
                <div className={"post__title-bar"}>
                  <h2>{post.titulo}</h2>
                  <h4>
                    {post.categoria} ({post.id})
                  </h4>
                </div>
                <h3>{post.subtitulo}</h3>
              </section>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
