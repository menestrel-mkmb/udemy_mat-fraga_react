import React, {Component} from "react";
import styles from "./styles.css";

class FortuneCookie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrases: [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
            ],
            chosenPhrase : "Clique no biscoito para abrí-lo e revelar sua frase no biscoito da sorte",
            showFortune: false
        }

        this.open = this.open.bind(this);
        this.randomPick = this.randomPick.bind(this);
    }

    open(e) {
        e.preventDefault();
        this.randomPick();
        this.setState({showFortune: true});
    }

    randomPick() {
        this.setState({chosenPhrase: `" ${this.state.phrases
                                        [Math.floor(Math.random() * this.state.phrases.length)]}
                                         "`});
    }

    render() {
        return(<article className={"fortune-cookie__artc"}>
            <img 
                className={"fortune-cookie__img"} src={require('../../assets/biscoito.png')}
                onClick={this.open} alt="Biscoito da sorte, clique para abrí-lo" srcset=""
            />
            <h3 className={"fortune-cookie__text"}>
                {this.state.chosenPhrase}
            </h3>
        </article>);
    }
}

export default FortuneCookie;