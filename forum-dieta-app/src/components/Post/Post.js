import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import PostDetails from "../../Pages/PostDetails/PostDetails";

function Post(props) {
  return (
    <article key={props.id} className={"post__arct"}>
      <img src={props.capa} alt="Illustrative for post" />
      <section className={"post-texts__sect"}>
        <div className={"post__title-bar"}>
          <h2>{props.titulo}</h2>
          <h4>
            {props.categoria} ({props.id})
          </h4>
        </div>
        <h3>{props.subtitulo}</h3>
        <Link to={`/post/${props.id}`} element={ <PostDetails /> } className={"post__btn"}>Ler mais</Link>
      </section>
    </article>
  );
}

export default Post;
