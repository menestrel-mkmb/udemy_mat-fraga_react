import React, { Component } from "react";

class Equipe extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        chamada: "Bem-vindo ao nosso site",
        contador: 0
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
        <h3>{this.state.chamada}</h3>
        <button onClick={this.diminuir}>-</button>
        {this.state.contador}
        <button onClick={this.aumentar}>+</button>
      </>);
    }
  }

  export default Equipe;