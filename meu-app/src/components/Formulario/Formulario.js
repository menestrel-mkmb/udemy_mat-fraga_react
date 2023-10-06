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
                {id: 2, name: "pass", type:"password", label: "password: ", value: "password"},
            ],
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
            <SelectForms/>
        </article>);
    }
}

export default Formulario;