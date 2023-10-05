import logo from './logo.svg';
import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import Person from './components/Person/Person';
import Equipe from './components/Equipe/Equipe';
import Relogio from './components/Relogio/Relogio';

function App() {
  return (<>
    <BemVindo nome="Fulano"/>

    <Relogio/>

    <Equipe/>
    <Person name="Michael" job="developer" />
    <Person name="Cicrano" job="qa" />
    <Person name="Beltrano" job="tester" />
    </>);
}

export default App;