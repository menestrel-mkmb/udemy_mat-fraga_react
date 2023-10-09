import React, {Component} from "react";
import InputForms from "../InputForms/InputForms";
import SelectForms from "../SelectForms/SelectForms";

class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Login",
            data: [
                {id: 1, name: "email", type:"email", label: "e-mail", value: "example@site.domain"},
                {id: 2, name: "pass", type:"password", label: "password", value: "password"},
                {id: 3, name: "name", type:"text", label: "name", value: "complete name"},
                {id: 4, name: "birth", type:"date", label: "birthdate", value: "birth date"},
            ],
            defaultGender: "na",
            selectGender: [
                {id: 1, name: "masc", value: "Masculino"},
                {id: 2, name: "femn", value: "Feminino"},
                {id: 3, name: "other", value: "Outro"},
                {id: 4, name: "na", value: "Prefiro não responder"},
            ],
            submitText: "Sign up",
            typesInp: ["name", "pass", "email", "birth"],
            typesSlc: ["gender"],
        }

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const values = {};
        this.state.typesInp.forEach((item) => {
            const value = document.querySelector(`.${item}__form-inp`);
            values[item]=value.value;
        });
        this.state.typesSlc.forEach((item) => {
            const value = document.querySelector(`.${item}__form-slc`);
            values[item]=value.value;
        });
        console.log(values);
    }

    render() {
        return(<article className={`${(this.state.title).toLowerCase()}__forms`}>
            <h2>{this.state.title}</h2>
            <form onSubmit={(e) => {this.submit(e)}}>
                {this.state.data.map( (inp) => {
                    return(
                        <InputForms key={inp.id}
                            name={inp.name} label={inp.label}
                            value={inp.value} type={inp.type}
                        />
                    )}
                )}
                <SelectForms
                    defaultGender={this.state.defaultGender}
                    selectGender={this.state.selectGender}
                />
                <button type="submit">{this.state.submitText}</button>
            </form>
        </article>);
    }
}

export default Formulario;