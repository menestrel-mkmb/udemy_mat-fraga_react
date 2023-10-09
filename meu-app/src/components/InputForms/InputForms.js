import React, {Component} from "react";

class InputForms extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            label: `${props.label}: `,
            type: props.type,
            value: props.value,
            onChange: props.onChange,
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        const value = e.target.value;
        this.setState({value: value});
    }

    render(){
        return(
            <section className={`${this.state.name}__form-sect`}>
                <label htmlFor={this.state.name}>{this.state.label}</label>
                <input type={this.state.type} className={`${this.state.name}__form-inp`}
                    name={this.state.name} id={this.state.name} required
                    value={this.state.value} onChange={this.onChange}
                />
            </section>
        );
    }
}

export default InputForms;