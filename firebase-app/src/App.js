import { useState } from 'react';

import { firebasedb, firebaseAuth } from './services/firebase/firebaseConnection';
import { addDoc, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const cleanLoginInput = () => {
    setEmail('');
    setPass('');
  }

  const createUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(firebaseAuth, email, pass)
    .then( () => {
      console.log("Cadastrado com sucesso");
      cleanLoginInput();
    })
    .catch( (error) => {
      console.log("Algum erro aconteceu ao cadastrar");
      if(error.code === 'auth/weak-password')
        alert('Senha fraca');
      if(error.code === 'auth/email-already-in-use')
        alert('Conta já existente');
    })
  }

  const loginUser = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(firebaseAuth, email, pass)
    .then( () => {
      console.log("Logado com sucesso");
    })
    .catch( () => {
      console.log("Erro ao fazer login");
    })
  }

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [toEdit, setToEdit] = useState(false);

  const [posts, setPosts] = useState([]);
  const dbName = "posts";

  const cleanPostInputs = () => {
    setAuthor('');
    setTitle('');
    setIdPost('');
    setToEdit(false);
  }

  const setSpecificPost = async (id) => {
    await setDoc(doc(firebasedb, dbName, id), {
      titulo: title,
      autor: author
    })
    .then( () => {
      console.log("Transação finalizada com sucesso");
      cleanPostInputs();
    })
    .catch( (error) => {
      console.log("Erro na transação " + error);
    });

    getAllPosts();
  }

  const submitPost = async () => {
    await addDoc(collection(firebasedb, dbName), {
      titulo: title,
      autor: author
    })
    .then( () => {
      console.log("Transação finalizada com sucesso");
      cleanPostInputs();
    })
    .catch( (error) => {
      console.log("Erro na transação: " + error);
    });

    getAllPosts();
  }

  const getAllPosts = async () => {
    const postsRef = collection(firebasedb, dbName);

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
      console.log(list);
    })
    .catch( (error) => {
      console.log("Erro ao buscar os posts " + error);
    } )
  }

  const deletePost = async (id) => {
    const docRef = doc(firebasedb, dbName, id);
    await deleteDoc(docRef)
    .then( () => {
      console.log("Post deletado com sucesso");
      cleanPostInputs();
      getAllPosts();
    })
    .catch( (error) => {
      console.log("Erro ao deletar post " + error);
    })
  }

  return (
    <div className="App">
      <h1>HelloWorld Firebase</h1>
      <article className={"container login__artc artc"}>
        <section className={"email__sect input__sect sect"}>
          <label className={"email__lbl lbl"}>
            e-mail:
          </label>
          <input
            type="email" placeholder="e-mail para login"
            className={"email__inp inp"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className={"pass__sect input__sect sect"}>
          <label className={"pass__lbl lbl"}>
            senha:
          </label>
          <input
            type="password" placeholder='********'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </section>
        <button onClick={createUser}>
          Criar conta
        </button>
        <button onClick={loginUser}>
          Login
        </button>
      </article>
      <article className={"container forms__artc artc"}>
        <section className={"title__sect input__sect sect"}>
          <label className={"title__lbl lbl"}>
            Título:
          </label>
          <textarea
            type="text" placeholder="Digite o texto"
            className={"title__inp inp"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </section>
        <section>
          <label>Autor: </label>
          <input
            type="text" placeholder="Autor do post"
            className={"author__inp inp"}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </section>
        { toEdit &&
          (<section className={"edit__sect sect"}>
            <button onClick={ (e) => setSpecificPost(idPost)}>Editar</button>
            <button onClick={ () => setToEdit(false)}>Cancelar editar</button>
          </section>)
        }
        { !toEdit &&
          (<section className={"cta__sect sect"}>
            <button onClick={submitPost}>Cadastrar</button>
            <button onClick={getAllPosts}>Buscar Todos os posts</button>
          </section>)
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