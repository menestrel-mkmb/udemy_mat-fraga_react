import React, { Component } from 'react';

class BemVindo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            statusLogin: false
        };
        
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar() {
        this.setState({name: "Visitante", statusLogin: true});
    }

    sair() {
        this.setState({name: "Fulano", statusLogin: false});
    }

    render() {
        return (<>
            <h1>Bem-vindo(a) {this.state.name} ao curso de React</h1>
            {this.state.statusLogin === false ? 
            <button onClick={this.entrar}>Entrar como Visitante</button>
            :
            <button onClick={this.sair}>Sair</button>}
            
        </>);
    }
}

export default BemVindo;