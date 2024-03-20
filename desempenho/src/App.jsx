import { useRef, useState } from 'react'
import './App.css'
import { Header } from './Header';


function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const descriptionRef = useRef(null);
  const typeRef = useRef("user");

  function handleSave(e){
    e.preventDefault();

    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);
    console.log(usernameRef.current?.value);
    console.log(descriptionRef.current?.value);
    console.log(typeRef.current.value);
  }

  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSave}>
        <input
          className="input"
          ref={nameRef}
          type="text"
          placeholder="Digite seu nome..."
        />

        <input
          className="input"
          ref={emailRef}
          type="text"
          placeholder="Digite seu email..."
        />

        <input
          className="input"
          ref={usernameRef}
          type="text"
          placeholder="Digite seu username..."
        />

        <textarea
          className="input"
          ref={descriptionRef}
          type="text"
          placeholder="Digite sua descriçao..."
        ></textarea>


        <select  
          className="select"
          ref={typeRef}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
