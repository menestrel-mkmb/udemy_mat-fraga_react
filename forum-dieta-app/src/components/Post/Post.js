import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <article key={props.id} className={"post__arct"}>
      <img src={props.capa} alt="" />
      <section>
        <div className={"post__title-bar"}>
          <h2>{props.titulo}</h2>
          <h4>
            {props.categoria} ({props.id})
          </h4>
        </div>
        <h3>{props.subtitulo}</h3>
      </section>
    </article>
  );
}

export default Post;
