import { useState } from 'react';

import Alunos from "./components/Alunos";

export default function App() {
  const [nomeAluno, setNomeAluno] = useState('Michael');

  return (
  <div className="App">
    <h1>Context API</h1>
    <Alunos nome={nomeAluno} setNome={setNomeAluno}/>
  </div>
  );
}