import { useState } from 'react';

import Alunos from "./components/Alunos";

export default function App() {
  const [nomeAluno, setNomeAluno] = useState('Desconhecido');
  const [input, setInput] = useState('');

  return (
  <div className="App">
    <h1>Context API</h1>
    
    <Alunos
      nome={nomeAluno}
      setNome={setNomeAluno}
      novoNome={input}
    />

    <input
      type='text' value={input}
      onChange={e=>setInput(e.target.value)}
      placeholder='Digite o nome que aparecerá aqui'
    />
  </div>
  );
}