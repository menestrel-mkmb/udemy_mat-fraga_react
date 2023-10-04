import logo from './logo.svg';
import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import Person from './components/Person/Person';

function App() {
  return (<>
    <BemVindo nome="Fulano"/>

    <h2>Conheça nossa equipe</h2>
    <Person name="Michael" job="developer" />
    <Person name="Cicrano" job="qa" />
    <Person name="Beltrano" job="tester" />
    </>);
}

export default App;
