import React, {Component} from "react";

class InputForms extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            label: `${props.label}: `,
            value: props.value,
        }
    }

    render(){
        return(
            <section className={`${this.state.name}__form-sect`}>
                <label for={this.state.name}>{this.state.label}</label>
                <input type={this.state.name} name={this.state.name} id={this.state.name} value={this.state.value} />
            </section>
        );
    }
}

export default InputForms;