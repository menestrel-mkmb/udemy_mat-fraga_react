import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Header } from './Header';
import './App.css';

const schema = z.object({
  name: z.string('Por favor utilize apenas letras')
        .nonempty('O campo de nome não pode ser vazio'),
  email: z.string()
        .email('Digite um email válido no formato: example@company.tld')
        .max(64, 'Por favor utilize no maximo 64 caracteres')
        .nonempty('O campo de email não pode ser vazio'),
  username: z.string('Por favor utilize apenas letras, números e os símbolos: - e _')
        .min(4, 'Por favor utilize pelo menos 4 caracteres')
        .max(12, 'Por favor utilize no maximo 12 caracteres')
        .nonempty('O campo de nome de usuário não pode ser vazio'),
  role: z.string('Por favor selecione um elemento válido')
        .nonempty('O tipo de cargo não pode ser vazio'),
  description: z.string('Por favor utilize apenas letras, números e os símbolos: - e _')
        .optional()
});

function App() {
  const {register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(schema) });
  const [result, setResult] = useState(null);

  function handleSave(data){
    setResult({
      name: data.name,
      email: data.email,
      username: data.username,
      role: data.role
    });
    (data.description) ? 
      setResult({
        ...result,
        description: data.description
      }) :
      setResult({
        ...result,
        description: null
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
        { errors.name && <span>{errors.name.message}</span>}

        <input
          className="input"
          type="text"
          placeholder="Digite seu email..."
          {...register("email")}
          id='email'
        />
        { errors.email && <span>{errors.email.message}</span>}

        <input
          className="input"
          type="text"
          placeholder="Digite seu username..."
          {...register("username")}
          id='username'
        />
        { errors.username && <span>{errors.username.message}</span>}

        <textarea
          className="input"
          type="text"
          placeholder="Digite sua descriçao..."
          {...register("description")}
          id='description'
        ></textarea>
        { errors.description && <span>{errors.description.message}</span>}


        <select  
          className="select"
          {...register("role")}
          id='role'
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        { errors.role && <span>{errors.role.message}</span>}

        <button className="button" type="submit">Enviar</button>
      </form>

      { result && (
      <section>
        <p>Nome: {result.name}</p>
        <p>Email: {result.email}</p>
        <p>Username: {result.username}</p>
        {result.description && <p>Descrição: {result.description}</p>}
        <p>Role: {result.role}</p>
      </section>
      )}
    </div>
  )
}

export default App;
