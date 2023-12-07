import { useState } from 'react';

import { firebasedb } from './services/firebase/firebaseConnection';
import { addDoc, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';

import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [toEdit, setToEdit] = useState(false);

  const [posts, setPosts] = useState([]);

  const cleanInputs = () => {
    setAuthor('');
    setTitle('');
    setIdPost('');
    setToEdit(false);
  }

  const setSpecificPost = async (id) => {
    await setDoc(doc(firebasedb, "posts", id), {
      titulo: title,
      autor: author
    })
    .then( () => {
      console.log("Transação finalizada com sucesso");
      cleanInputs();
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
      cleanInputs();
    })
    .catch( (error) => {
      console.log("Erro na transação: " + error);
    });

    getAllPosts();
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

  const deletePost = async (id) => {
    const docRef = doc(firebasedb, "posts", id);
    await deleteDoc(docRef)
    .then( () => {
      console.log("Post deletado com sucesso");
      cleanInputs();
      getAllPosts();
    })
    .catch( (error) => {
      console.log("Erro ao deletar post " + error);
    })
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
          <section className={"edit__sect sect"}>
            
            <button onClick={ (e) => setSpecificPost(idPost)}>Editar</button>
            <button onClick={ () => setToEdit(false)}>Cancelar editar</button>
          </section>
          )
        }
        { !toEdit &&
          (
          <section className={"cta__sect sect"}>
            <button onClick={submitPost}>Cadastrar</button>
            <button onClick={getAllPosts}>Buscar Todos os posts</button>
          </section>
          )
        }
      </article>
      <article className={"posts__artc artc"}>
        {posts.map( (post, index) => {
          return(
            <section key={post.id}
              className={"post__sect post"}
            >
              <div>
                <h2 className={"post__title title"}>{post.title}</h2>
                <h3 className={"post__sub-title author sub-title"}>{post.author}</h3>
                
              </div>
              <div>
                <button onClick={ () => {
                  setToEdit(true);
                  setTitle(posts[index].title);
                  setAuthor(posts[index].author);
                  setIdPost(posts[index].id);
                } }>Editar esse post</button>
                <button onClick={ () => deletePost(posts[index].id)}>Deletar</button>
              </div>
            </section>);
        })}
      </article>
    </div>
  );
}

export default App;