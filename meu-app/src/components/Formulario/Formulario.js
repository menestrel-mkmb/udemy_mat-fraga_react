import React, {Component} from "react";
import InputForms from "../InputForms/InputForms";

class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Login",
            data: [
                {id: 1, name: "email", type:"email", label: "e-mail", value: "example@site.domain"},
                {id: 2, name: "pass", type:"password", label: "password: ", value: "password"},
            ],
            defaultGender: "na",
            selectGender: [
                {id: 1, name: "masc", value: "Masculino"},
                {id: 2, name: "femn", value: "Feminino"},
                {id: 3, name: "other", value: "Outro"},
                {id: 4, name: "na", value: "Prefiro não responder"},
            ]
        }
    }

    render() {
        return(<article className={`${(this.state.title).toLowerCase()}__forms`}>
            <h2>{this.state.title}</h2>
            {this.state.data.map( (inp) => {
                return(
                    <InputForms key={inp.id}
                        name={inp.name} label={inp.label}
                        value={inp.value} type={inp.type}
                    />
                )}
            )}
            <label htmlFor="gender">Gênero: </label>
            <select name="gender" id="gender"
                value={this.state.defaultGender}
                onChange={(e) => {this.setState({defaultGender: e.target.value})}}
            >
                {this.state.selectGender.map( (gender) => {
                    return(
                        <option key={gender.id}
                            value={gender.name}>{gender.value}</option>
                    )}
                )}
            </select>
        </article>);
    }
}

export default Formulario;