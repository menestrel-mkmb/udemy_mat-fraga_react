import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Header } from './Header';
import './App.css';

const schema = z.object({
  name: z.string()
        .min(8, 'Por favor utilize pelo menos 8 caracteres')
        .max(64, 'Por favor utilize no maximo 64 caracteres')
        .refine(
          (value) => /(\p{Letter}*){4,64}$/su.test(value),
          {
            message: 'Por favor utilize apenas letras e espaço, com um mínimo 4 e um máximo 64 caracteres',
            unicode: true
        }),

  email: z.string()
        .email('Digite um email válido no formato: example@company.tld')
        .min(5, 'Por favor utilize pelo menos 5 caracteres')
        .max(64, 'Por favor utilize no maximo 64 caracteres'),

  username: z.string('Por favor utilize apenas letras, números e o símbolo: e _')
        .min(4, 'Por favor utilize pelo menos 4 caracteres')
        .max(12, 'Por favor utilize no maximo 12 caracteres')
        .refine( value => /^\w*$/su.test(value), 'Por favor utilize apenas letras, números e o símbolo: e _'),

  role: z.string('Por favor selecione um elemento válido'),

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
      description: data.description ? data.description : null,
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
        { errors.name && <span className="inp-error__span">{errors.name.message}</span>}

        <input
          className="input"
          type="text"
          placeholder="Digite seu email..."
          {...register("email")}
          id='email'
        />
        { errors.email && <span className="inp-error__span">{errors.email.message}</span>}

        <input
          className="input"
          type="text"
          placeholder="Digite seu username..."
          {...register("username")}
          id='username'
        />
        { errors.username && <span className="inp-error__span">{errors.username.message}</span>}

        <textarea
          className="input"
          type="text"
          placeholder="Digite sua descrição..."
          {...register("description")}
          id='description'
        ></textarea>
        { errors.description && <span className="inp-error__span">{errors.description.message}</span>}


        <select  
          className="select"
          {...register("role")}
          id='role'
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        { errors.role && <span className="inp-error__span">{errors.role.message}</span>}

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
