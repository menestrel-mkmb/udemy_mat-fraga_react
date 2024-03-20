import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { Header } from './Header';


function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const descriptionRef = useRef(null);
  const typeRef = useRef("user");

  const {register, handleSubmit} = useForm();

  function handleSave(data){
    const {name, email, username, description, role} = data;
    console.log(name, email, username, description, role);
  }

  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome..."
          {...register("name")}
          id='name'
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email..."
          {...register("email")}
          id='email'
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu username..."
          {...register("username")}
          id='username'
        />

        <textarea
          className="input"
          type="text"
          placeholder="Digite sua descriçao..."
          {...register("description")}
          id='description'
        ></textarea>


        <select  
          className="select"
          {...register("role")}
          id='role'
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
