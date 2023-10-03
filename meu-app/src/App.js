import logo from './logo.svg';
import './App.css';

const BemVindo = (props) => <h1>Bem-vindo(a) {props.nome} ao curso de React</h1>

function App() {
  return (<>
    <BemVindo nome="Michael"/>
    <BemVindo nome="Fulano"/>
    </>);
}

export default App;
