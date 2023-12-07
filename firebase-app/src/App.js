import { firebasedb } from './services/firebase/firebaseConnection';
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [toEdit, setToEdit] = useState(false);

  const [posts, setPosts] = useState([]);

  const setSpecificPost = async (id) => {
    await setDoc(doc(firebasedb, "posts", id), {
      titulo: title,
      autor: author
    })
    .then( () => {
      console.log("Transação finalizada com sucesso");
    })
    .catch( (error) => {
      console.log("Erro na transação " + error);
    });

    getAllPosts();
  }

  const submitPost = async () => {
    await addDoc(collection(firebasedb, "posts"), {
      titulo: title,
      autor: author
    })
    .then( () => {
      console.log("Transação finalizada com sucesso");
    })
    .catch( (error) => {
      console.log("Erro na transação: " + error);
    });

    getAllPosts();
  }

  const getSpecificPost = async (id) => {
    const postRef = doc(firebasedb, "posts", id);

    await getDoc(postRef)
    .then( (snapshot) => {
      setAuthor(snapshot.data().autor);
      setTitle(snapshot.data().titulo);
      setIdPost(snapshot.id);
    })
    .catch( (error) => {
      console.log("Erro ao buscar o post " + error);
    });
  }

  const getAllPosts = async () => {
    const postsRef = collection(firebasedb, "posts");

    await getDocs(postsRef)
    .then( (snapshot) => {
      const list = [];

      snapshot.forEach( (doc) => {
        list.push({
          id: doc.id,
          title: doc.data().titulo,
          author: doc.data().autor
        })
      });

      setPosts(list);
    })
    .catch( (error) => {
      console.log("Erro ao buscar os posts " + error);
    } )
  }

  const deletePost = async () => {
    
  }

  return (
    <div className="App">
      <h1>HelloWorld Firebase</h1>
      <article className={"container forms__artc artc"}>
        <label>Título: </label>
        <textarea
          type="text" placeholder="Digite o texto"
          className={"title__inp inp"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Autor: </label>
        <input
          type="text" placeholder="Autor do post"
          className={"author__inp inp"}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        { toEdit &&
          (
          <section>
            <label>ID Post: </label>
            <input
              type="text"
              className={"author__inp inp"}
              value={idPost}
              onChange={(e) => setIdPost(e.target.value)}
            />
            <button onClick={ (e) => setSpecificPost(idPost)}>Editar</button>
            <button onClick={ () => setToEdit(false)}>Cancelar editar</button>
          </section>
          )
        }
        { !toEdit &&
          (<button onClick={submitPost}>Cadastrar</button>)
        }
      </article>
      <article className={"posts__artc artc"}>
      <button onClick={getAllPosts}>Buscar Todos os posts</button>
        {posts.map( (post, index) => {
          return(
            <section key={post.id}
              className={"post__sect post"}
            >
              <div>
                <h2 className={"post__title title"}>{post.title}</h2>
                <h3 className={"post__sub-title author sub-title"}>{post.author}</h3>
                { toEdit && (<label className={"post__id lbl"}>{post.id}</label>)}
              </div>
              <div>
                <button onClick={ () => {
                  setToEdit(true);
                  setTitle(posts[index].title);
                  setAuthor(posts[index].author);
                  setIdPost(posts[index].id);
                } }>Editar esse post</button>
                <button onClick={ (e) => deletePost(e, post.id)}>Deletar</button>
              </div>
            </section>);
        })}
      </article>
    </div>
  );
}

export default App;