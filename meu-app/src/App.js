import logo from './logo.svg';
import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import Person from './components/Person/Person';
import Equipe from './components/Equipe/Equipe';
import { Component } from 'react';

class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString()});
    }, 1000);
  }

  render() {
    return(<>
    <p>Hora atual: {this.state.hora}</p>
    </>);
  }
}

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