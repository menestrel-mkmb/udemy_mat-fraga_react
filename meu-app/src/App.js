import './App.css';

import BemVindo from './components/BemVindo/BemVindo';
import Relogio from './components/Relogio/Relogio';

import Formulario from './components/Formulario/Formulario';

import Equipe from './components/Equipe/Equipe';

function App() {
  return (<>
    {/* <BemVindo name="Fulano"/>
    <Relogio/> */}
    <Formulario />

    <Equipe/>
    </>);
}

export default App;