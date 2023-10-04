import logo from './logo.svg';
import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import Person from './components/Person/Person';
import Equipe from './components/Equipe/Equipe';
import { Component } from 'react';

function App() {
  return (<>
    <BemVindo nome="Fulano"/>

    <Equipe/>
    <Person name="Michael" job="developer" />
    <Person name="Cicrano" job="qa" />
    <Person name="Beltrano" job="tester" />
    </>);
}

export default App;