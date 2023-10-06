import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import Equipe from './components/Equipe/Equipe';
import Relogio from './components/Relogio/Relogio';

function App() {
  return (<>
    <BemVindo name="Fulano"/>

    <Relogio/>

    <Equipe/>
    </>);
}

export default App;