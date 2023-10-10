import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import Relogio from './components/Relogio/Relogio';
import Formulario from './components/Formulario/Formulario';
import Equipe from './components/Equipe/Equipe';
import FortuneCookie from './components/FortuneCookie/FortuneCookie';
import Cronometro from './components/Cronometro/Cronometro';

function App() {
  return (<>
    <BemVindo name="Fulano"/>
    <Relogio/>
    <FortuneCookie />
    <Formulario />
    <Equipe/>
    <Cronometro />
    </>);
}

export default App;