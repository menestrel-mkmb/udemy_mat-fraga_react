import React, { Component } from "react";
import Person from "../Person/Person";

class Equipe extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        chamada: "Bem-vindo ao nosso site",
        showCounter: false,
        contador: 0,
        feed:[
          {id: 1, username: "michael",job: "programação", curtidas: 10, comentarios: 2},
          {id: 2, username: "fulano",job: "design", curtidas: 25, comentarios: 8},
          {id: 3, username: "cicrana",job: "teste", curtidas: 125, comentarios: 40},
        ]
      }
  
      this.aumentar = this.aumentar.bind(this);
      this.diminuir = this.diminuir.bind(this);
    }
  
    aumentar() {
      let state = this.state;
  
      state.contador += 1;
      if(state.contador >= 5) state.chamada = "Conheça nossa equipe";
      
      this.setState(state);
    }
    
    diminuir() {
      let state = this.state;
  
      state.contador -= 1;
      if(state.contador < 5) state.chamada = "Bem-vindo ao nosso site";
  
      this.setState(state);
    }
  
    render() {
      return(<>
      {/* <button onClick={this.diminuir}>-</button>
      {this.state.contador}
      <button onClick={this.aumentar}>+</button> */}
      <h2>Time</h2>
      {this.state.feed.map((person) => {
        return (<div>
        <Person key={person.id}
            id={person.id} name={person.username} job={person.job}
            likes={person.curtidas} comments={person.comentarios}
        />
        </div>);
      })}
      </>);
    }
  }

  export default Equipe;