import { firebasedb } from './services/firebase/firebaseConnection';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const setHardPost = async () => {
    await setDoc(doc(firebasedb, "posts", "12345"), {
      titulo: title,
      autor: author
    })
    .then( () => {
      console.log("Transação finalizada com sucesso");
    })
    .catch( (error) => {
      console.log("Erro na transação");
    });
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
  }

  const getAllPosts = async () => {
    const postRef = doc(firebasedb, "posts", "DhUBHb7Mb4wL1iGHuj8v");

    await getDoc(postRef)
    .then( (snapshot) => {
      setAuthor(snapshot.data().autor);
      setTitle(snapshot.data().titulo);
    })
    .catch( (error) => {
      console.log("Erro ao buscar o post " + error);
    });
  }

  return (
    <div className="App">
      <h1>HelloWorld Firebase</h1>
      <article className={"container"}>
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
        <button onClick={submitPost}>Cadastrar</button>
        <button onClick={getAllPosts}>Buscar</button>
      </article>
    </div>
  );
}

export default App;
