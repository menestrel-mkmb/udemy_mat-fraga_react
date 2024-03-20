import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Header } from './Header';
import './App.css';


function App() {
  const {register, handleSubmit} = useForm();
  const [result, setResult] = useState(null);

  function handleSave(data){
    setResult({
      name: data.name,
      email: data.email,
      username: data.username,
      description: data.description,
      role: data.role
    });
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

      { result && <section>
        <p>Nome: {result.name}</p>
        <p>Email: {result.email}</p>
        <p>Username: {result.username}</p>
        <p>Descrição: {result.description}</p>
        <p>Role: {result.role}</p>
      </section> }
    </div>
  )
}

export default App
