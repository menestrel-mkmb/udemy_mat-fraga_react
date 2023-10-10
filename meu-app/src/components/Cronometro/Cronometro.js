import React, { Component } from "react";
import "./style.css";

class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currState: false,
            currTime: 0.0
        }
        this.timer = null;

        this.toggleTime = this.toggleTime.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    toggleTime(e) {
        e.preventDefault();
        let state = this.state;
        state.currState = !state.currState;
        this.setState(state);
        (this.state.currState) ?
            this.timer = setInterval(() => {
                let state = this.state;
                state.currTime += 0.01;
                this.setState(state);
            }, 10) :
            clearInterval(this.timer);
    }

    resetTime(e) {
        e.preventDefault();
        this.setState({currState: false, currTime: 0.0});
        clearInterval(this.timer);
    }

    render() {
        return(
        <article className={"timer__artc"}>
            <img className={"timer__img"}
                src={require('../../assets/cronometro.png')} alt="Um crônometro"
            />
            <p className={"timer__txt"}>{(this.state.currTime.toFixed(2))}</p>
            <button className={"start-stop__btn"} onClick={this.toggleTime}>S</button>
            <button className={"reset__btn"} onClick={this.resetTime}>R</button>
        </article>);
    }
}

export default Cronometro;