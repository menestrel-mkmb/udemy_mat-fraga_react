import React, { Component } from "react";

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

export default Relogio;